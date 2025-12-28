"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { IndianRupee, ShieldCheck, Search } from "lucide-react"
import { useState, useEffect } from "react"
import { formatCurrency, searchProjects } from "@/lib/projects-data"
import { fetchProjectsFromSheets, type Project } from "@/app/actions/fetch-projects"

export function FinancialTransparency() {
  const [searchQuery, setSearchQuery] = useState("")
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await fetchProjectsFromSheets()
        setProjects(data)
      } catch (error) {
        console.error("Failed to load projects:", error)
      } finally {
        setLoading(false)
      }
    }
    loadProjects()
  }, [])

  const filteredProjects = searchProjects(searchQuery, projects)

  if (loading) {
    return (
      <section className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Financial Transparency</h2>
            <p className="text-muted-foreground">Track public funds allocation across major projects</p>
          </div>
        </div>
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading projects...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Financial Transparency</h2>
          <p className="text-muted-foreground">Track public funds allocation across major projects</p>
        </div>
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search projects, cities, states..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found matching your search.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map((project) => {
            const percentageUsed = (project.fundsUsed / project.totalBudget) * 100
            const remaining = project.totalBudget - project.fundsUsed

            return (
              <Card key={project.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="gap-1 bg-primary/10 text-primary border-0">
                    <ShieldCheck className="size-3" />
                    <span className="text-xs">AI Verified</span>
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-accent">
                      <IndianRupee className="size-4 text-accent-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-base leading-tight line-clamp-2">{project.name}</CardTitle>
                  <CardDescription className="text-xs">
                    {project.location}, {project.state} • {project.category}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Central Funds Used</span>
                      <span className="font-semibold text-foreground">{percentageUsed.toFixed(0)}%</span>
                    </div>
                    <Progress value={percentageUsed} className="h-2" />
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <div>
                      <p className="text-xs text-muted-foreground">Used</p>
                      <p className="text-sm font-semibold text-foreground">{formatCurrency(project.fundsUsed)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Remaining</p>
                      <p className="text-sm font-semibold text-primary">{formatCurrency(remaining)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </section>
  )
}
