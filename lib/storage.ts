// Simple types for contact form
export interface Contact {
  id: number;
  name: string;
  email: string;
  company: string | null;
  message: string;
  createdAt: Date;
}

export interface InsertContact {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// Simple in-memory storage for demo purposes
// In production, you'd use a real database
class MemStorage {
  private contacts: Map<number, Contact>;
  private currentContactId: number;

  constructor() {
    this.contacts = new Map();
    this.currentContactId = 1;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = {
      id,
      name: insertContact.name,
      email: insertContact.email,
      company: insertContact.company ?? null,
      message: insertContact.message,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getContact(id: number): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }
}

export const storage = new MemStorage();
