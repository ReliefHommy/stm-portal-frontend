
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="font-bold text-lg">Somtam Marketplace</h3>
          <p className="text-sm text-white max-w-xs mt-2">
            Bringing the best of Thailand to Europe through food, wellness, and entertainment.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="space-y-1 text-sm mt-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/join" className="hover:underline">Join as Vendor</a></li>
            <li><a href="/support" className="hover:underline">Support</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm mt-2">📧 hello@somtammarketplace.com</p>
          <p className="text-sm">📍 Berlin, Germany</p>
        </div>
      </div>
    </footer>
  );
}
