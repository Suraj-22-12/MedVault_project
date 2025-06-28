import { useState, useEffect } from 'react';
import { Search, Plus, Download, Edit, Trash2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DarkModeToggle from '@/components/DarkModeToggle';

interface MedicalRecord {
  id: string;
  medicineName: string;
  expiryDate: string;
  notes: string;
  createdAt: string;
}

const Records = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    medicineName: '',
    expiryDate: '',
    notes: ''
  });

  useEffect(() => {
    // Check authentication - replace with your Appwrite auth logic
    const checkAuth = () => {
      // Placeholder - replace with actual Appwrite auth check
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (!isLoggedIn) {
        window.location.href = '/login?message=Please login to view your records';
        return;
      }
      setIsAuthenticated(true);
    };

    checkAuth();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRecord: MedicalRecord = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString()
    };
    setRecords([...records, newRecord]);
    setFormData({ medicineName: '', expiryDate: '', notes: '' });
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    setRecords(records.filter(record => record.id !== id));
  };

  const handleDownload = (record: MedicalRecord) => {
    // Placeholder for PDF download functionality
    console.log('Downloading record:', record);
  };

  const filteredRecords = records.filter(record =>
    record.medicineName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.notes.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-black dark:to-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-black dark:via-gray-900/20 dark:to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Medical Records</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Manage your health records securely</p>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 items-start lg:items-center justify-between">
          {/* Left side - Add Record and Search */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <Button
              onClick={() => setShowForm(!showForm)}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Record
            </Button>
            
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search records..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm dark:text-white"
              />
            </div>
          </div>
          
          {/* Right side - Dark Mode Toggle */}
          <DarkModeToggle />
        </div>

        {/* Add Record Form */}
        {showForm && (
          <Card className="mb-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-white/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Add New Medical Record</CardTitle>
              <CardDescription className="dark:text-gray-300">Fill in the details for your medical record</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Medicine Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.medicineName}
                    onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 dark:bg-gray-700/70 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.expiryDate}
                    onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 dark:bg-gray-700/70 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Notes
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 dark:bg-gray-700/70 dark:text-white"
                    placeholder="Additional notes..."
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                    Save Record
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)} className="dark:border-gray-600 dark:text-gray-300">
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecords.map((record) => (
            <Card key={record.id} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 dark:text-white">{record.medicineName}</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Expires: {new Date(record.expiryDate).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{record.notes}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleDownload(record)} className="dark:border-gray-600 dark:text-gray-300">
                    <Download className="w-4 h-4 mr-1" />
                    PDF
                  </Button>
                  <Button size="sm" variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(record.id)} className="text-red-600 border-red-300 hover:bg-red-50 dark:text-red-400 dark:border-red-600 dark:hover:bg-red-900/20">
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRecords.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <FileText className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No records found</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {searchTerm ? 'Try a different search term' : 'Add your first medical record to get started'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Records;
