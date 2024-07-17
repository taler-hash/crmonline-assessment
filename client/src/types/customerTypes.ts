export interface fieldProps {
  full_name?: string
  first_name?: string,
  last_name?: string,
  email_address?: string,
  contact_number?: string | undefined
}

export interface errorProps {
  first_name?: [],
  last_name?: [],
  email_address?: [],
  contact_number?: [] 
}

export interface filterProps {
  page?: number
}