import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from "zod";
import { storage } from "../server/storage";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  company: z.string().max(100, "Company name is too long").optional(),
  message: z.string().min(1, "Message is required").max(1000, "Message is too long"),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact form submission
      const contact = await storage.createContact(validatedData);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you soon.",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      } else {
        console.error("Contact form submission error:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error. Please try again later."
        });
      }
    }
  } else if (req.method === 'GET') {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
