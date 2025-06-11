
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of coaches and students already using Skedy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-3 text-lg">
              Find a Coach
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg">
              Become a Provider
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">S</span>
                </div>
                <span className="text-2xl font-bold text-foreground">Skedy</span>
              </div>
              <p className="text-muted-foreground">
                Connecting coaches and students through smart scheduling and seamless payments.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#team" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div id="terms">
              <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Skedy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
