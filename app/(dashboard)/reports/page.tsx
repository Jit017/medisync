'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  PlusCircle,
  FileText,
  Search,
  Filter,
  Calendar,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  BarChart4,
  PieChart,
  Download,
  Share2,
  Eye,
  FileBarChart2,
  FileCog,
  FileWarning,
  Clipboard,
  ClipboardList,
  Stethoscope,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Report {
  id: string;
  title: string;
  date: string;
  doctor: string;
  category: string;
  status: string;
  priority: string;
  icon: React.ElementType;
  color: string;
}

export default function ReportsPage() {
  const reports: Report[] = [
    { 
      id: "REP-001", 
      title: "Annual Check-up Results", 
      date: "Mar 15, 2025", 
      doctor: "Dr. Sarah Johnson",
      category: "Check-up",
      status: "Completed", 
      priority: "Normal",
      icon: FileText,
      color: "blue"
    },
    { 
      id: "REP-002", 
      title: "Blood Test Analysis", 
      date: "Feb 28, 2025", 
      doctor: "Dr. Michael Chen",
      category: "Lab Results",
      status: "Pending Review", 
      priority: "High",
      icon: FileBarChart2,
      color: "purple"
    },
    { 
      id: "REP-003", 
      title: "X-Ray Report", 
      date: "Feb 10, 2025", 
      doctor: "Dr. Emily Rodriguez",
      category: "Imaging",
      status: "Completed", 
      priority: "Normal",
      icon: FileCog,
      color: "green"
    },
    { 
      id: "REP-004", 
      title: "Cardiology Consultation", 
      date: "Jan 25, 2025", 
      doctor: "Dr. Sarah Johnson",
      category: "Consultation",
      status: "Action Required", 
      priority: "Urgent",
      icon: FileWarning,
      color: "red"
    },
    { 
      id: "REP-005", 
      title: "Allergy Test Results", 
      date: "Jan 12, 2025", 
      doctor: "Dr. Robert Williams",
      category: "Lab Results",
      status: "Completed", 
      priority: "Normal",
      icon: FileBarChart2,
      color: "purple"
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center shadow-sm">
          <CheckCircle2 className="mr-1 h-3 w-3" /> {status}
        </Badge>;
      case "Pending Review":
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 flex items-center shadow-sm">
          <HelpCircle className="mr-1 h-3 w-3" /> {status}
        </Badge>;
      case "Action Required":
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 flex items-center shadow-sm">
          <AlertCircle className="mr-1 h-3 w-3" /> {status}
        </Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "Urgent":
        return <Badge className="bg-gradient-to-r from-red-500 to-rose-500 shadow-sm">{priority}</Badge>;
      case "High":
        return <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 shadow-sm">{priority}</Badge>;
      case "Normal":
        return <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 shadow-sm">{priority}</Badge>;
      default:
        return <Badge>{priority}</Badge>;
    }
  };

  const getIconBackground = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600";
      case "purple":
        return "bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600";
      case "green":
        return "bg-gradient-to-br from-green-100 to-green-200 text-green-600";
      case "red":
        return "bg-gradient-to-br from-red-100 to-red-200 text-red-600";
      default:
        return "bg-gradient-to-br from-primary/10 to-primary/20 text-primary";
    }
  };

  return (
    <div className="container mx-auto space-y-8">
      {/* Hero Section with Animation */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-10 mix-blend-overlay"></div>
        
        {/* Animated circles */}
        <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 h-32 w-32 rounded-full bg-white/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-0 left-1/3 h-24 w-24 rounded-full bg-white/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        <div className="relative z-10 flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white/20 p-2 backdrop-blur-md shadow-lg border border-white/30 animate-bounce" style={{ animationDuration: "3s" }}>
              <ClipboardList className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Medical Reports</h1>
          </div>
          <p className="text-white/80 text-lg">View and manage your health reports and test results in one place</p>
          
          <div className="mt-4 flex gap-3">
            <Button className="bg-white text-indigo-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Eye className="mr-2 h-4 w-4 group-hover:animate-pulse" /> View Latest Reports
            </Button>
            <Button variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <PlusCircle className="mr-2 h-4 w-4" /> Add New Report
            </Button>
          </div>
        </div>
      </div>
      
      {/* Dashboard Summary */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { title: "Total Reports", value: "24", change: "+3 from last month", icon: ClipboardList, color: "bg-blue-500", gradient: "from-blue-500 to-indigo-500" },
          { title: "Pending Review", value: "5", change: "2 high priority", icon: HelpCircle, color: "bg-yellow-500", gradient: "from-yellow-500 to-amber-500" },
          { title: "Action Required", value: "3", change: "1 urgent priority", icon: AlertCircle, color: "bg-red-500", gradient: "from-red-500 to-rose-500" },
          { title: "Completed", value: "16", change: "All reviewed", icon: CheckCircle2, color: "bg-green-500", gradient: "from-green-500 to-emerald-500" }
        ].map((stat, index) => (
          <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative">
            {/* Glassmorphism effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 pointer-events-none dark:from-black/5 dark:to-black/10"></div>
            
            {/* Animated gradient border */}
            <div className="absolute inset-0 p-0.5 rounded-lg bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-x"></div>
            
            <div className="absolute h-1 top-0 left-0 right-0 bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${stat.color}, ${stat.color.replace('bg-', 'bg-')})` }}></div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={`p-2 rounded-full bg-gradient-to-br ${stat.gradient} text-white shadow-md`}>
                  <stat.icon className="h-4 w-4" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
              
              {/* Mini sparkline chart */}
              <div className="h-6 mt-2 flex items-end space-x-1">
                {[3, 7, 5, 9, 6, 8, 7, 9, 8].map((value, i) => (
                  <div 
                    key={i} 
                    className="w-1 bg-gradient-to-t rounded-t-sm transition-all duration-500 group-hover:animate-pulse" 
                    style={{ 
                      height: `${value * 10}%`, 
                      backgroundImage: `linear-gradient(to top, ${stat.color}, transparent)`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Reports Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Reports</CardTitle>
              <CardDescription>View and manage your medical reports</CardDescription>
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Search reports..."
                className="w-[300px]"
                icon={<Search className="h-4 w-4" />}
              />
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending Review</SelectItem>
                  <SelectItem value="action">Action Required</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${getIconBackground(report.color)} shadow-md`}>
                        <report.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">{report.title}</div>
                        <div className="text-sm text-muted-foreground">{report.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{report.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      {report.date}
                    </div>
                  </TableCell>
                  <TableCell>{report.doctor}</TableCell>
                  <TableCell>{getStatusBadge(report.status)}</TableCell>
                  <TableCell>{getPriorityBadge(report.priority)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="flex items-center justify-between w-full">
            <div className="text-sm text-muted-foreground">
              Showing 1 to 5 of 24 reports
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
} 