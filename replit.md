# Review App

## Overview
A simple, interactive review application that allows users to submit reviews with star ratings across different categories (Misc, Food, People). The app features a clean interface with image slideshow on the home page and integrates with Google Apps Script for data submission.

## Current State
The application is fully functional and running in the Replit environment. It's a static HTML/JavaScript application with no build dependencies.

## Project Structure
- `index.html` - Main HTML file with three screens: Home, Review Form, and Information
- `script.js` - JavaScript logic for navigation, star ratings, category selection, and review submission
- `image1.jpg`, `image2.jpg`, `image3.jpg` - Slideshow images on the home screen
- `.replit` - Replit configuration
- `.gitignore` - Git ignore patterns for Python and Replit files

## Features
1. **Home Screen**: Welcome page with rotating image slideshow (5-second intervals)
2. **Review Form**: 
   - Category selection (Misc, Food, People)
   - Interactive 5-star rating system with hover effects
   - Text area for detailed reviews
   - Submit functionality that sends data to Google Apps Script
3. **Information Page**: Static information display
4. **Navigation**: Easy navigation between all screens

## Technology Stack
- Pure HTML/CSS/JavaScript (no frameworks)
- Python's built-in HTTP server for serving static files
- Google Apps Script integration for data persistence

## Running the Application
The app runs on port 5000 using Python's HTTP server. The workflow is configured to automatically start the server when the Repl runs.

## Deployment
Configured for Replit Autoscale deployment, suitable for this stateless static website.

## Recent Changes (Oct 28, 2025)
- Fixed JavaScript error by adding null check for non-existent DOM elements
- Added stock images for the home page slideshow
- Configured Python HTTP server to serve on port 5000
- Set up deployment configuration for Replit
- Created .gitignore file for Python and Replit environment files
