import { Header } from "@/components/header"
import { FinancialTransparency } from "@/components/financial-transparency"
import { GrievanceMap } from "@/components/grievance-map"
import { ReportIssueForm } from "@/components/report-issue-form"
import { GoogleMapsLoader } from "@/components/google-maps-loader"

export default function Home() {
  return (
    <GoogleMapsLoader>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="space-y-8">
            <FinancialTransparency />
            <div className="grid gap-8 lg:grid-cols-2">
              <GrievanceMap />
              <ReportIssueForm />
            </div>
          </div>
        </main>
      </div>
    </GoogleMapsLoader>
  )
}
