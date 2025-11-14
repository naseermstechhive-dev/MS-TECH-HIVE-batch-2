Project Dependencies Documentation
🚀 Core Dependencies

React & Ecosystem
react & react-dom (v19.1.1) - Modern React framework
react-scripts - Create React App build tools
react-router-dom (v7.8.0) - Client-side routing and navigation

UI & Styling

react-icons (v5.5.0) - Comprehensive icon library
lucide-react (v0.553.0) - Additional icon set
tailwind-scrollbar-hide - Utility to hide scrollbars

Animation & Effects

aos (v2.3.4) - Animate On Scroll library for scroll-triggered animations
Internationalization (i18n)
i18next (v25.6.2) - Internationalization framework
react-i18next - React bindings for i18next
i18next-browser-languagedetector - Auto-detect user language
i18next-http-backend - Load translations via HTTP

Professional Features

Dark/light theme support
Scroll animations
API integration ready
Comprehensive testing setup


App Component

Overview
Main application component with routing structure and theme management.

Features
1. Layout Structure
Navbar (fixed navigation)
Main content area (flex-grow)
Footer

2. Routing System
Home page
About page
Contact page
Services page
Industries page
10+ industry-specific pages

3. Theme Support

Dark/light mode toggle
Smooth color transitions
Background and text theming

Routes
/ - HomePage
/about - About
/contact - Contact
/industries - IndustriesPage
/service - Services
Industry pages: /hospital, /school, /college, /restaurant, /office, /retaileShop, /construction, /logistics, /itCompany, /ecommerce, /clinicLab

Technical

React Router DOM for navigation
Theme context integration
Responsive layout
Industry-specific component routing



🎨 Key Features
✅ 1. Responsive Navigation

1. Desktop version with full menu
2. Mobile version with hamburger menu
3. Sliding mobile panel
4. Mobile search support

🔍 2. Powerful Live Search (Desktop + Mobile)

The search bar allows users to type industry names and instantly see filtered results.

✔ Real-time filtering
✔ Click to navigate
✔ Press Enter to open first result
✔ Works with translations (supports all languages)
✔ Separate UI for Desktop & Mobile search

🌍 3. Multi-language Support

Languages included:

1. English
2. తెలుగు
3. हिन्दी
4. தமிழ்
5. ಕನ್ನಡ

Each language instantly updates using i18next.

🏭 4. Industries Dropdown

Dynamically generated list of industries:

1. Hospital
2. School
3. College
4. Restaurant
5. Retail
6. Logistics
7. Office
8. IT Company
9. Construction
10. E-commerce
11. Clinic & Lab

Each item automatically adapts to the selected language.

🌓 5. Dark/Light Theme Toggle

Using ThemeContext, users can switch themes.

✔ Saves preference
✔ Smooth transitions
✔ Different colors for inputs, text, and dropdowns

📱 6. Mobile Features

1. Mobile search
2. Collapsible menu
3. Touch-friendly buttons
4. Dropdown sections

Full-screen overlay menu



Enter Key Support:
If at least one result exists → navigate to first match.
    Clicking a search result:
                    > Navigate to path
                    > Close all menus

🧭 Navigation Structure

Links included:

1. Home
2. Services
3. Industries (Dropdown)
4. About
5. Contact

🧩 Dependencies Used
react-icons
react-router-dom
i18next
tailwindcss
context-api


ServiceHero Component
Overview

Reusable hero section component for service pages with consistent layout and animations.

Features

1. Left Content Section

Logo display with animations
Title and subtitle
Description text
Primary & secondary buttons
Gradient divider

2. Right Image Section

Service image display
Yellow info box overlay with:
Secondary logo/icon
Text1 (main label)
Text2 (sub label)
Decorative background elements

Props

logo - Main logo/icon
logo2 - Secondary icon for info box
title - Main heading
subtitle - Subheading text
description - Service description
primaryButton - Main CTA text
secondaryButton - Secondary button text
image - Service image URL
text1 - Info box main text
text2 - Info box secondary text

Technical

AOS animations (fade-right, fade-left, zoom)
Responsive grid layout
Dark/light theme support
Navigation integration
Gradient styling with yellow accent


InfoCard2 Component

Overview
Reusable feature card component with hover animations and consistent styling.

Features
1. Visual Elements

Icon/emoji display with hover animation
Title text
Two-line description
Hover state with background transition

2. Animations

Zoom-out entrance effect
Icon moves left on hover (-translate-x-6)
Background color transition
Smooth 300ms duration

Props

icon - Icon component or string emoji
title - Card title
description1 - First description line
description2 - Second description line

Styling

Fixed dimensions: 410px × 220px (360px mobile)
Gray/white theme with amber-400 icons
Dark mode support
Rounded corners (12px)
Shadow effects
Technical

AOS animations
Responsive design
Type checking for icons
Group hover states

Hospital Component - Quick Overview
Main Sections
1. Hero Section

Hospital automation solutions showcase
Patient management, appointments, medical records, billing
24/7 support

2. 6 Key Features

Patient Management System
Appointment Scheduling
Electronic Medical Records
Billing & Insurance
HIPAA Compliance
Analytics Dashboard

3. Benefits & CTA

Left Side: 6 key benefits with checkmarks
Right Side: Call-to-action with "Schedule Demo" button
Technical
Animated scroll effects (AOS)
Responsive design
Dark theme with yellow accents
Navigation to contact page


Purpose: Showcase hospital automation services and drive conversions.




School Component
Overview
School management automation page with education solutions.

Features
1. Hero Section

Education management solutions
Automated attendance & parent communication
Real-time updates

2. 6 Core Features

Student Management - Profiles & enrollment tracking
Attendance Tracking - Automated with real-time notifications
Parent Communication - Direct teacher-parent channels
Grade Management - Digital gradebooks & reports
Academic Analytics - Performance insights & metrics
Safety & Security - Check-in systems & emergency protocols

3. Benefits & CTA

Left: 6 key benefits with metrics
Right: Demo scheduling with implementation plan


College Component
Overview
Higher education management automation platform for colleges and institutions.

1. Hero Section
Higher Education Solutions
Admission management & student dashboards
Smart Analytics

2. 6 Core Features

Admission Management - Application processing & enrollment
Student Dashboards - Course registration & academic progress
Analytics & Reporting - Performance insights & institutional metrics
Course Management - Scheduling & faculty assignment
Academic Records - Digital transcripts & degree verificatio
Fee Management - Automated collection & financial aid

3. Benefits & CTA

Left: 6 key benefits with time-saving metrics
Right: Demo scheduling with tailored implementation





Restaurant Component
Overview

Food service automation platform for restaurant operations management.

Features

1. Hero Section

Food Service Automation
Order management & kitchen automation
Smart Kitchen solutions

2. 6 Core Features

Order Management System - Dine-in, takeout & delivery processing
Kitchen Automation - Digital displays & order prioritization
Table Management - Smart tracking & reservation system
POS & Billing Systems - Integrated payments & inventory
Staff Scheduling - Automated shifts & performance tracking
Delivery Tracking - Real-time driver & customer notifications

3. Benefits & CTA

Left: 6 operational benefits with efficiency metrics
Right: Demo scheduling with customized implementation






Office Component

Overview

Corporate automation platform for office operations and employee management.

Features

1. Hero Section

Corporate Automation Solutions
HR systems & document management
Smart Workflows

2. 6 Core Features

HR Management System - Employee management & payroll
Document Management - Digital storage & secure sharing
Task Automation - Project management & assignment
Analytics Dashboard - Productivity metrics & efficiency
Employee Portals - Self-service leave & benefits
Time Tracking - Automated attendance & payroll integration

3. Benefits & CTA

Left: 6 operational benefits with overhead reduction
Right: Demo scheduling with customized office solutions



Retail Shop Component
Overview

Retail management automation platform for store operations and sales.

Features

1. Hero Section

Retail Management Solutions
Inventory & POS systems
Smart Retail solutions

2. 6 Core Features

Inventory Management - Stock tracking & automated reordering
Point of Sale Systems - Payment processing & transactions
Customer Management - CRM integration & loyalty programs
Sales Analytics - Reporting & performance dashboards
E-commerce Integration - Online/offline sales unification
Staff Management - Scheduling & commission automation

3. Benefits & CTA

Left: 6 retail benefits with time-saving metrics
Right: Demo scheduling with store-specific setup


Construction Component
Overview

Construction project management platform for building operations and site management.

Features

1. Hero Section
Project Management Solutions
Tracking systems & progress monitoring
Smart Projects

2. 6 Core Features

Project Tracking - Milestone & deadline management
Worker Management - Attendance & skill-based assignments
Resource Planning - Equipment & material optimization
Progress Monitoring - Real-time dashboards & analytics
Documentation Management - Digital blueprints & compliance
Time & Cost Tracking - Budget monitoring & automation

3. Benefits & CTA

Left: 6 construction benefits with delay reduction metrics
Right: Demo scheduling with field support




Logistics Component
Overview

Transportation and logistics management platform for fleet and delivery operations.

Features

1. Hero Section

Transportation Solutions
Fleet management & route optimization
Smart Routes

2. 6 Core Features

Fleet Management - Vehicle tracking & maintenance
Route Optimization - AI-powered planning & fuel efficiency
Shipment Tracking - Real-time package monitoring
Analytics Dashboard - Performance metrics & reporting
Driver Management - Scheduling & performance tracking
Delivery Automation - Dispatch & customer communication

3. Benefits & CTA

Left: 6 logistics benefits with delivery time reduction
Right: Demo scheduling with 24/7 fleet support


IT Company Component
Overview

Tech project management platform for IT operations and development teams.

Features

1. Hero Section

Tech Project Solutions
Project dashboards & client portals
Smart Projects

2. 6 Core Features

Project Dashboards - Real-time progress & team collaboration
Client Portals - Communication & feedback systems
Resource Management - Team allocation & skill tracking
Documentation Systems - Version control & knowledge base
Sprint Planning - Agile management & backlog
Time Tracking - Billing integration & productivity analytics

3. Benefits & CTA

Left: 6 IT benefits with delivery time improvement
Right: Demo scheduling with API integrations



E-commerce Component
Overview
Online business automation platform for e-commerce operations and sales.

Features
1. Hero Section

Online Business Solutions
CRM systems & AI chatbots
smart Commerce

2. 6 Core Features

Customer CRM - Purchase history & segmentation
AI Chatbots - Customer support & recommendations
Sales Analytics - Conversion tracking & insights
Order Management - Processing & fulfillment tracking
Inventory Integration - Real-time management & alerts
Payment Automation - Secure processing & subscriptions

3. Benefits & CTA

Left: 6 e-commerce benefits with delivery improvements
Right: Demo scheduling with 24/7 support



Clinic/Lab Component
Overview

Laboratory management platform for clinic and diagnostic operations.

Features

1. Hero Section

Laboratory Management Solutions
Sample tracking & automated reports
Smart Lab

2. 6 Core Featurer

Sample Tracking - Specimen tracking with barcodes
Lab Reports - Automated generation & delivery
Patient Records - Secure data & test integration
Result Management - Quality control & notifications
Compliance Management - Regulatory tracking & audits
Workflow Automation - Appointments & equipment

3. Benefits & CTA

Left: 6 lab benefits with processing time reduction
Right: Demo scheduling with equipment integration



IN all components Technical used


Scroll animations (AOS)
Responsive design
Contact page navigation
Dark theme with yellow accents





IndustriesSection Component
Overview
Grid layout showcasing 11 industry verticals with cards, features, and navigation.

Features

Industry Cards (11)
Hospital 🏥
School 🏫
College 🎓
Restaurant 🍽️
Office 🏢
Retail Shop 🛍️
Construction 🏗️
Logistics 🚛
IT Company 💻
E-commerce 🛒
Clinic & Labs 🔬
Card Elements
Industry icon & image
Description text

4 key features as tags

"Learn More" navigation
Hover animations
Additional Sections
Main heading with description
Bottom CTA for custom solutions

Technical

AOS scroll animations
Responsive grid (1 → 2 → 3 columns)
Dark/light theme support
React Router navigation
Image optimization with Pexels
 


About Component
Overview
Company about page with story, value proposition, and call-to-action.

Sections

1. Hero Section

Main heading "About Us"
Subtitle describing digital solutions

2. Story Section

Two-column layout (text + image)
Company mission and journey
Professional business image

3. Why Choose Us 

Three value proposition cards:
Expert Solutions
Trusted Team
Quality Delivery
Grid layout with hover effects
4. CTA Section

Custom solution offer
Contact page navigation

Technical

AOS scroll animations
Responsive grid layouts
Dark/light theme support
Image optimization
Hover transitions