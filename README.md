# Trip Scheduling Website - Tripset

## Live Demo
🌐 [Tripset - Live Website](https://trip-set.vercel.app)

## Project Setup Guide

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/tripset.git
cd tripset
```
### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

## Project Structure
```
tripset/
├── public/
│ ├── logo-trip.png
│ ├── hero-bg.png
│ └── testimonial images
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── Home.jsx
│ │ ├── TripPlanning.jsx
│ │ └── Contact.jsx
│ ├── assets/
│ ├── App.jsx
│ └── main.jsx
├── tailwind.config.js
├── package.json
└── index.html
```

# Trip Scheduling Website Requirements Checklist

## 1. Home Page ✅
- [x] Hero Section
  - [x] Call-to-action (CTA) button for trip planning
  - [x] Engaging headline and subtext
  - [x] Hero image
- [x] Website Features Overview
  - [x] Smart Calendar feature card
  - [x] Trip Planning feature card
  - [x] Accommodation Booking feature card
  - [x] Travel Arrangements feature card
- [x] Navigation Bar
  - [x] React Router implementation
  - [x] Links to all pages
  - [x] Responsive mobile menu
  - [x] Logo and branding
- [x] Testimonials Section
  - [x] User profile images
  - [x] User quotes
  - [x] Star ratings
  - [x] User roles/titles
- [x] Visual Elements
  - [x] Travel-related images
  - [x] Consistent branding
  - [x] Responsive design

## 2. Trip Planning Page ✅
- [x] Trip Details Form
  - [x] Destination input
  - [x] Start date picker
  - [x] End date picker
  - [x] Number of travelers input
  - [x] Activities textarea
- [x] Travel Preferences
  - [x] Transport mode dropdown
  - [x] Accommodation type dropdown
- [x] Dynamic Destination Information
  - [x] API integration (RestCountries)
  - [x] Country flag display
  - [x] Country information display
  - [x] Travel tips section
- [x] Form Validation
  - [x] Required fields validation
  - [x] Date validation
  - [x] Number of travelers validation
  - [x] Form state management

## 3. Contact Page ✅
- [x] Contact Form
  - [x] Name field
  - [x] Email field
  - [x] Message field
  - [x] Inquiry type dropdown
- [x] Company Information
  - [x] Email address
  - [x] Phone number
  - [x] Physical address
  - [x] Office hours
- [x] Form Validation
  - [x] Email format validation
  - [x] Required fields validation
  - [x] Form state management
- [x] Newsletter Subscription
  - [x] Subscription checkbox
  - [x] Newsletter section in footer

## Additional Features ✅
- [x] Comprehensive Footer
  - [x] Company information
  - [x] Quick links
  - [x] Services
  - [x] Contact information
  - [x] Social media links
  - [x] Newsletter subscription
- [x] Responsive Design
  - [x] Mobile-friendly layout
  - [x] Tablet optimization
  - [x] Desktop optimization
- [x] User Experience
  - [x] Loading states
  - [x] Error handling
  - [x] Form feedback
  - [x] Smooth transitions