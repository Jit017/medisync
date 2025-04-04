import { MedicalRecordsList } from "@/components/medical-records/medical-records-list"
import { MedicalRecordsSearch } from "@/components/medical-records/medical-records-search"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

export default function MedicalRecordsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Medical Records</h1>
        <Button>
          <Upload className="mr-2 h-4 w-4" /> Upload Records
        </Button>
      </div>

      <MedicalRecordsSearch />
      <MedicalRecordsList />
    </div>
  )
}

