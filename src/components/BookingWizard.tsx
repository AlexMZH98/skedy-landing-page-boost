
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface Coach {
  id: string;
  name: string;
  activityType: string;
}

interface BookingWizardProps {
  isOpen: boolean;
  onClose: () => void;
  coach: Coach | null;
}

interface FormData {
  contactMethod: 'email' | 'phone' | 'both';
  email: string;
  phone: string;
  studentAge: string;
  frequency: string;
  timeframe: string;
  additionalNotes: string;
}

const BookingWizard = ({ isOpen, onClose, coach }: BookingWizardProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    contactMethod: 'email',
    email: '',
    phone: '',
    studentAge: '',
    frequency: '',
    timeframe: '',
    additionalNotes: ''
  });
  const { toast } = useToast();

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the booking request to your backend
    console.log('Booking request submitted:', { coach, formData });
    
    toast({
      title: "Booking Request Sent!",
      description: `Your request has been sent to ${coach?.name}. They will contact you soon.`,
    });
    
    // Reset form and close
    setStep(1);
    setFormData({
      contactMethod: 'email',
      email: '',
      phone: '',
      studentAge: '',
      frequency: '',
      timeframe: '',
      additionalNotes: ''
    });
    onClose();
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        if (formData.contactMethod === 'email') return formData.email;
        if (formData.contactMethod === 'phone') return formData.phone;
        if (formData.contactMethod === 'both') return formData.email && formData.phone;
        return false;
      case 2:
        return formData.studentAge && formData.frequency;
      case 3:
        return formData.timeframe;
      default:
        return false;
    }
  };

  if (!coach) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Book a Session with {coach.name} - {coach.activityType}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress Indicator */}
          <div className="flex items-center space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    i <= step
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {i}
                </div>
                {i < 3 && (
                  <div
                    className={`w-12 h-1 ${
                      i < step ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Contact Information */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              
              <div className="space-y-4">
                <div>
                  <Label>How would you like to be contacted?</Label>
                  <Select
                    value={formData.contactMethod}
                    onValueChange={(value: 'email' | 'phone' | 'both') =>
                      updateFormData('contactMethod', value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email only</SelectItem>
                      <SelectItem value="phone">Phone only</SelectItem>
                      <SelectItem value="both">Both email and phone</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {(formData.contactMethod === 'email' || formData.contactMethod === 'both') && (
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>
                )}

                {(formData.contactMethod === 'phone' || formData.contactMethod === 'both') && (
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Student Information */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Student Information</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="studentAge">Student Age</Label>
                  <Select
                    value={formData.studentAge}
                    onValueChange={(value) => updateFormData('studentAge', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select age range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="child">Child (5-12 years)</SelectItem>
                      <SelectItem value="teen">Teen (13-17 years)</SelectItem>
                      <SelectItem value="adult">Adult (18+ years)</SelectItem>
                      <SelectItem value="senior">Senior (65+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>How often would you like to attend?</Label>
                  <Select
                    value={formData.frequency}
                    onValueChange={(value) => updateFormData('frequency', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="once-week">Once a week</SelectItem>
                      <SelectItem value="twice-week">Twice a week</SelectItem>
                      <SelectItem value="multiple-week">Multiple times a week</SelectItem>
                      <SelectItem value="instructor-guidance">By instructor guidance</SelectItem>
                      <SelectItem value="flexible">Flexible schedule</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Schedule Preferences */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Schedule Preferences</h3>
              
              <div className="space-y-4">
                <div>
                  <Label>Preferred timeframe</Label>
                  <Select
                    value={formData.timeframe}
                    onValueChange={(value) => updateFormData('timeframe', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (6AM - 12PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12PM - 6PM)</SelectItem>
                      <SelectItem value="evening">Evening (6PM - 10PM)</SelectItem>
                      <SelectItem value="weekdays">Weekdays only</SelectItem>
                      <SelectItem value="weekends">Weekends only</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    value={formData.additionalNotes}
                    onChange={(e) => updateFormData('additionalNotes', e.target.value)}
                    placeholder="Any specific requirements, goals, or questions..."
                    rows={3}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={step === 1}
            >
              Previous
            </Button>
            
            {step < 3 ? (
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid()}
              >
                Send Request
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingWizard;
