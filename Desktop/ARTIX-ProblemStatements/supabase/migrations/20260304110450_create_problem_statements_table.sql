/*
  # Create problem_statements table for ARTIX-2026

  1. New Tables
    - `problem_statements`
      - `id` (integer, primary key) - Problem number (1-79)
      - `domain` (text) - Category domain (Insurance, HR, etc.)
      - `title` (text) - Problem statement title
      - `description` (text) - Detailed description
      - `skills` (text) - Required skills
      - `is_internship` (boolean) - Whether it offers internship
      - `created_at` (timestamptz) - Creation timestamp

  2. Security
    - Enable RLS on `problem_statements` table
    - Add policy for public read access (hackathon is public)
*/

CREATE TABLE IF NOT EXISTS problem_statements (
  id integer PRIMARY KEY,
  domain text NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  skills text NOT NULL,
  is_internship boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE problem_statements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read problem statements"
  ON problem_statements
  FOR SELECT
  TO anon, authenticated
  USING (true);