import MainNavbar from "@/app/components/hompage/MainNavbar";
import { Table } from "lucide-react";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Privacy Policy | Somtam Market",
  description:
    "This policy is written in accordance with the EU General Data Protection Regulation (GDPR).",
};

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
        
     
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-16 md:px-6 lg:px-8">
        {/* Page Header */}
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Privacy& Policy
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Privacy Policy
          </h1>
           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
            Somtam Market
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            Last updated: 29 January 2026
          </p>
          <p className="text-slate-700">
            Somtam Market (“we”, “us”, or “our”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you visit https://somtammarket.com
 or use our services.

This policy is written in accordance with the EU General Data Protection Regulation (GDPR).
          </p>
        </header>

        {/* 1. Who We Are */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl text-slate-600">
           1. Who We Are
          </h2>

          <ul className="text-slate-700">
            <li>
              <span className="text-sm font-semibold text-slate-600">Website:</span> https://somtammarket.com/
            </li>
            <li>
              <span className="text-sm font-semibold text-slate-600">Business name:</span>  Somtam Market
            </li>
            <li>
              <span className="text-sm font-semibold text-slate-600">Country of operation:</span>  European Union
            </li>
             <li>
              <span className="text-sm font-semibold text-slate-600">Contact email:</span>  admin@somtammarket.com
            </li>
          </ul>
          <p className="text-slate-700">
            Somtam Market is the data controller responsible for your personal data.
          </p>
        </section>

        {/* 2. What Personal Data We Collect */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl text-slate-600">
           2. What Personal Data We Collect
          </h2>

<p className="text-slate-700">
We collect only the data necessary to operate our services.
          </p>
          <p className="text-slate-700 font-semibold">
(a) Account & Identity Data</p>
         
          <ul className="text-slate-700">
            <li>
              • Email address
            </li>
            <li>
          • Password (stored in hashed form)</li>
            <li>
          • User role (customer / partner)</li>

          </ul>
                    <p className="text-slate-700 font-semibold">
(b) Order & Transaction Data</p>
<ul className="text-slate-700">
            <li>
              • Order details
            </li>
            <li>
          • Delivery address</li>
            <li>
          • Order notes</li>

          </ul>
          <p className="text-slate-700 font-semibold">
(c) Technical Data</p>
<ul className="text-slate-700">
            <li>
              • IP address
            </li>
            <li>
          • Browser type</li>
            <li>
          • Device information</li>
            <li>
          • Log data for security and debugging</li>

          </ul>
                    <p className="text-slate-700 font-semibold">
(d) Cookies & Analytics</p>
<ul className="text-slate-700">
            <li>
              • Essential cookies (required for login and site functionality)
            </li>
            <li>
          • Optional analytics cookies (only with your consent)</li>
       
         

          </ul>

        
          
 
        </section>

  {/* 3. Why We Collect Your Data */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl text-slate-600">
           3. Why We Collect Your Data
          </h2>


          
          <p className="text-slate-700">
           Under GDPR, we must have a legal reason to process your data.
          </p>
                    <ul className="text-slate-700">
            <li>
              • To create and manage user accounts  <span className="text-sm font-semibold text-slate-600">Legal basis:</span>
   Performance of a contract
            </li>
            <li>
              • To process orders and provide services  
  <span className="text-sm font-semibold text-slate-600"> Legal basis:</span>  Performance of a contract
            </li>
            <li>
              • To secure the website and prevent abuse  
  <span className="text-sm font-semibold text-slate-600">Legal basis:</span>   Legitimate interest
            </li>
             <li>
              • To improve site performance and user experience (analytics)  
  <span className="text-sm font-semibold text-slate-600">Legal basis: </span>  Consent
            </li>
                         <li>
              • To comply with legal and regulatory obligations  
  
  <span className="text-sm font-semibold text-slate-600">Legal basis: </span> Legal obligation  
            </li>
          </ul>

    
        
        </section>
   {/* 4. Cookies */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl text-slate-600">
         4. Cookies
          </h2>


          
          <p className="text-slate-700">
           We use cookies to ensure the website functions correctly.
          </p>
            <p className="text-slate-700 font-semibold">
          Types of cookies:
          </p>
                    <ul className="text-slate-700">
            <li>
              •   <span className="text-sm font-semibold text-slate-600"> Essential cookies :</span>
 required for login, security, and core functionality
            </li>
            <li>
              • 
  <span className="text-sm font-semibold text-slate-600"> Analytics cookies :</span>   used to understand site usage (only with consent)
            </li>



          </ul>
           <p className="text-slate-700">
       You can manage or withdraw cookie consent at any time through the cookie banner.
          </p>

    
        
        </section>
     {/* 5. Who We Share Data With */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl text-slate-600">
         5. Who We Share Data With
          </h2>


          
          <p className="text-slate-700">
          We do not sell your data.
          </p>
            <p className="text-slate-700 font-semibold">
        We may share limited data with trusted service providers (“data processors”) such as:
          </p>
                    <ul className="text-slate-700">
            <li>
              •   Hosting providers
            </li>
            <li>
              • 
  Email delivery services          </li>
     <li>
              • 
  Analytics providers         </li>
       <li>
              • 
Payment processors (if applicable)         </li>



          </ul>
           <p className="text-slate-700">
     All providers comply with GDPR and have appropriate Data Processing Agreements (DPAs) in place.
          </p>

    
        
        </section>
    {/* 6. Data Retention */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl text-slate-600">
      6. Data Retention
          </h2>


          
          <p className="text-slate-700">
         We keep your data only as long as necessary:
          </p>

                    <ul className="text-slate-700">
            <li>
              •   Account data → until you delete your account
            </li>
            <li>
              • Order data → as required by accounting and legal obligations
  Email delivery services          </li>
     <li>
              • 
  Technical logs → limited retention for security purposes       </li>
     



          </ul>
           <p className="text-slate-700">
  When data is no longer required, it is deleted or anonymized.
          </p>

    
        
        </section>
     {/* 7. Your Rights Under GDPR */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl text-slate-600">
     7. Your Rights Under GDPR
          </h2>


          
          <p className="text-slate-700">
      You have the right to:
          </p>

                    <ul className="text-slate-700">
            <li>
              •   Access your personal data
            </li>
            <li>
              • Correct inaccurate data          </li>
     <li>
              • 
  Request deletion of your data       </li>
       <li>
              • 
   Withdraw consent at any time      </li>
          <li>
              • 
   Request a copy (data portability)      </li>
             <li>
              • 
   Lodge a complaint with a data protection authority      </li>

     



          </ul>
           <p className="text-slate-700">
To exercise your rights, contact: 📧 admin@somtammarket.com
          </p>

    
        
        </section>
{/* 8. Account Deletion*/}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl text-slate-600">
     8. Account Deletion
          </h2>


          
          <p className="text-slate-700">
  You may request account deletion at any time.
          </p>
                    <p className="text-slate-700">
When your account is deleted:
          </p>

                    <ul className="text-slate-700">
            <li>
              •   Personal data is removed or anonymized
            </li>
            <li>
              • Order records may be retained only where legally required         </li>


          </ul>


    
        
        </section>
{/* 9. Data Security */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl text-slate-600">
     9. Data Security
          </h2>


          
          <p className="text-slate-700">
We use appropriate technical and organizational measures to protect your data, including:
          </p>


                    <ul className="text-slate-700">
            <li>
              •   HTTPS encryption
            </li>
            <li>
              • Secure authentication        </li>
                 <li>
              •   Access controls
            </li>
            <li>
              • Regular updates and monitoring        </li>


          </ul>
                    <p className="text-slate-700">
No system is 100% secure, but we continuously improve our safeguards.
          </p>


    
        
        </section>

{/* 10. International Data Transfers */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl text-slate-600">
     10.International Data Transfers
          </h2>


          
          <p className="text-slate-700">
If data is processed outside the EU, we ensure appropriate safeguards are in place in accordance with GDPR (e.g. standard contractual clauses).
          </p>

    
        </section>
{/* 11.Changes to This Policy */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl text-slate-600">
     11.Changes to This Policy
          </h2>


          
          <p className="text-slate-700">
We may update this Privacy Policy from time to time.
The latest version will always be available on this page.          </p>

    
        </section>

  {/* 12.Contact */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl text-slate-600">
    12.Contact
          </h2>


          
          <p className="text-slate-700">
If you have any questions about this Privacy Policy or your data:📧 admin@somtammarket.com       </p>

    
        </section>
        


      </div>
      
     
    </main>
  );
};

export default PrivacyPolicyPage;