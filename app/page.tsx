import { Header } from "@/components/header"
import { FinancialTransparency } from "@/components/financial-transparency"
import { GrievanceMap } from "@/components/grievance-map"
import { ReportIssueForm } from "@/components/report-issue-form"
import { GoogleMapsEmbed } from "@/components/google-maps-embed"
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
            <GoogleMapsEmbed location="India" lat={20.5937} lng={78.9629} zoom={5} />
          </div>
        </main>
      </div>
    </GoogleMapsLoader>
  )
}
