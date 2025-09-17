import Link from "next/link";
import { CodeBlock } from "@/components/labs/code-block";

export default function Lab2Page() {
  return (
    <>
      {/* Lab Header */}
      <div className="mb-8">
        <div className="grid grid-cols-3 gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
          <div className="text-center">
            <div className="text-lg font-semibold text-blue-900">3-4 hours</div>
            <div className="text-sm text-blue-700">Duration</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-blue-900">Intermediate</div>
            <div className="text-sm text-blue-700">Level</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-blue-900">Flask + Prometheus</div>
            <div className="text-sm text-blue-700">Technology</div>
          </div>
        </div>
        
        <p className="text-lg text-gray-600">
          Build a Flask MLOps service to track AI performance, integrate Prometheus for metrics monitoring, and implement comprehensive metrics collection for your AI receptionist.
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-gray max-w-none">
        <h2 id="overview" className="text-2xl font-bold mt-8 mb-6 text-gray-900">Lab Overview</h2>
        
        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong>Time Required:</strong> 3-4 hours<br/>
          <strong>What You'll Do:</strong> Build a Flask MLOps service to track AI performance, integrate Prometheus for metrics monitoring, and implement comprehensive metrics collection for your AI receptionist
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong>Lab Collaborators:</strong>
        </p>
        <ul className="mb-6 ml-6 space-y-2">
          <li className="text-gray-700">Edward Lampoh - Software Developer & Collaborator</li>
          <li className="text-gray-700">Oluwafemi Adebayo, PhD - Academic Professor & Collaborator</li>
        </ul>   
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-red-800 mb-2">🚨 Prerequisites Required</h3>
          <p className="text-red-700">
            You must complete Lab 1 and have a working Next.js application before starting Lab 2.
          </p>
        </div>

        <h2 id="prerequisites" className="text-2xl font-bold mt-10 mb-6 text-gray-900">Prerequisites from Lab 1</h2>
        
        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong>Before starting Lab 2, ensure you completed Lab 1 and have:</strong>
        </p>

        <ul className="mb-6 ml-6 space-y-2">
          <li className="text-gray-700">Working Next.js app running at http://localhost:3000</li>
          <li className="text-gray-700">Environment file (.env) with these keys configured:</li>
        </ul>

        <CodeBlock language="env">{`DATABASE_URL="your_neon_connection_string"
GOOGLE_GENERATIVE_AI_API_KEY="your_gemini_api_key"`}</CodeBlock>

        <ul className="mb-6 ml-6 space-y-2">
          <li className="text-gray-700">Neon database connected and working (test by creating a business in the app)</li>
          <li className="text-gray-700">Chat functionality working (you can ask questions and get AI responses)</li>
          <li className="text-gray-700">Appointment booking working (AI can transition to booking mode)</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-blue-800 mb-2">🔍 Quick Test</h4>
          <ol className="text-blue-700 space-y-1">
            <li>1. Go to http://localhost:3000</li>
            <li>2. Create a test business</li>
            <li>3. Chat with the AI and try booking an appointment</li>
            <li>4. If this works, you're ready for Lab 2!</li>
          </ol>
        </div>

        <h2 id="database-setup" className="text-2xl font-bold mt-10 mb-6 text-gray-900">Complete Database Setup</h2>
        
        <p className="mb-4 text-gray-700 leading-relaxed">
          If you haven't set up Neon database yet, follow these steps:
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Step 1: Create Neon Database (If Not Done)</h3>
        
        <ol className="mb-6 ml-6 space-y-2">
          <li className="text-gray-700"><strong>Go to <a href="https://neon.tech" className="text-blue-600 hover:text-blue-800 underline" target="_blank">neon.tech</a></strong> and sign up for free</li>
          <li className="text-gray-700"><strong>Create a new project</strong> called "ai-appointment-setter"</li>
          <li className="text-gray-700"><strong>Copy your connection string</strong> from the dashboard</li>
          <li className="text-gray-700"><strong>Add to your .env file:</strong></li>
        </ol>

        <CodeBlock language="env">{`DATABASE_URL="postgresql://username:password@host/database?sslmode=require"`}</CodeBlock>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Step 2: Create Required Tables</h3>
        
        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong>You need BOTH tables for Lab 2 to work:</strong>
        </p>

        <h4 className="text-lg font-semibold mt-6 mb-3 text-gray-900">Option A: Use the SQL files (Recommended)</h4>
        
        <CodeBlock language="bash">{`# Check if you have the SQL files
ls scripts/
# You should see: create-tables.sql and create-metrics-table.sql

# View the main tables SQL
cat scripts/create-tables.sql

# View the metrics table SQL  
cat scripts/create-metrics-table.sql`}</CodeBlock>

        <h4 className="text-lg font-semibold mt-6 mb-3 text-gray-900">Option B: Copy-paste this SQL</h4>
        
        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong>Go to your Neon database console and run BOTH scripts:</strong>
        </p>

        <p className="mb-2 text-gray-700 leading-relaxed">
          <strong>First, create the main tables (if not done in Lab 1):</strong>
        </p>
        <CodeBlock language="sql">{`-- Main application tables (from Lab 1) - Copy from scripts/create-tables.sql
-- This creates: businesses, documents, conversations, messages, appointments, business_settings
-- Run the entire contents of scripts/create-tables.sql in your Neon console`}</CodeBlock>

        <p className="mb-2 text-gray-700 leading-relaxed">
          <strong>Then, create the metrics table for Lab 2:</strong>
        </p>
        <CodeBlock language="sql">{`-- Create AI Metrics table for MLOps tracking
CREATE TABLE IF NOT EXISTS ai_metrics (
    id SERIAL PRIMARY KEY,
    business_id VARCHAR(255) NOT NULL,
    conversation_id VARCHAR(255),
    session_id VARCHAR(255) NOT NULL,
    
    -- Performance metrics
    response_time_ms INTEGER NOT NULL,
    success_rate DECIMAL(5,4) NOT NULL,
    
    -- AI performance metrics
    tokens_used INTEGER NOT NULL,
    prompt_tokens INTEGER,
    completion_tokens INTEGER,
    api_cost_usd DECIMAL(10,6) NOT NULL,
    model_name VARCHAR(100) NOT NULL,
    
    -- Business metrics
    intent_detected VARCHAR(50) NOT NULL,
    appointment_requested BOOLEAN DEFAULT FALSE,
    human_handoff_requested BOOLEAN DEFAULT FALSE,
    appointment_booked BOOLEAN DEFAULT FALSE,
    
    -- Message metrics
    user_message_length INTEGER NOT NULL,
    ai_response_length INTEGER NOT NULL,
    response_type VARCHAR(50) NOT NULL,
    
    -- Timestamp
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_ai_metrics_business_id ON ai_metrics(business_id);
CREATE INDEX IF NOT EXISTS idx_ai_metrics_created_at ON ai_metrics(created_at);`}</CodeBlock>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Step 3: Verify Database Setup</h3>
        
        <p className="mb-2 text-gray-700 leading-relaxed">
          <strong>Test your database connection:</strong>
        </p>

        <CodeBlock language="sql">{`-- Check if all tables exist
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;

-- You should see: appointments, ai_metrics, businesses`}</CodeBlock>

        <p className="mb-2 text-gray-700 leading-relaxed">
          <strong>Test inserting data:</strong>
        </p>
        <CodeBlock language="sql">{`-- Test businesses table
INSERT INTO businesses (name, industry, description) 
VALUES ('Test Business', 'Healthcare', 'Test description');

-- Check it worked
SELECT * FROM businesses WHERE name = 'Test Business';

-- Test ai_metrics table structure
SELECT column_name, data_type FROM information_schema.columns 
WHERE table_name = 'ai_metrics' 
ORDER BY ordinal_position;`}</CodeBlock>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-green-800 mb-2">✅ Success indicators:</h4>
          <ul className="text-green-700 space-y-1">
            <li>• All 3 tables exist (businesses, appointments, ai_metrics)</li>
            <li>• You can insert and select from businesses table</li>
            <li>• ai_metrics table has all required columns</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-yellow-800 mb-2">❌ Still having issues?</h4>
          <ul className="text-yellow-700 space-y-1">
            <li>• Check your DATABASE_URL format includes <code className="bg-white px-1 py-0.5 rounded text-sm font-mono">?sslmode=require</code></li>
            <li>• Ensure you're using the correct database name from Neon</li>
            <li>• Try refreshing your Neon console and running SQL again</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Step 4: Environment Configuration Check</h3>
        
        <p className="mb-2 text-gray-700 leading-relaxed">
          <strong>Ensure your main .env file has:</strong>
        </p>
        <CodeBlock language="env">{`# Required for Lab 2
DATABASE_URL="postgresql://username:password@host/database?sslmode=require"
GOOGLE_GENERATIVE_AI_API_KEY="your_gemini_api_key"

# App Settings
NEXT_PUBLIC_APP_URL=http://localhost:3000
SECRET_KEY=change_this_to_something_secure
DEBUG=true`}</CodeBlock>

        <p className="mb-2 text-gray-700 leading-relaxed">
          <strong>Test your Next.js app works:</strong>
        </p>
        <CodeBlock language="bash">{`# Start your Next.js app
npm run dev

# Go to http://localhost:3000
# Create a test business
# Try chatting with the AI
# Try booking an appointment`}</CodeBlock>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-blue-800 mb-2">🎯 Pre-Lab 2 Checklist</h4>
          <p className="text-blue-700 mb-2">Before starting Part A, verify you have:</p>
          <ul className="text-blue-700 space-y-1 text-sm">
            <li>✓ Neon database created and accessible</li>
            <li>✓ All tables created (businesses, appointments, ai_metrics, etc.)</li>
            <li>✓ DATABASE_URL in your .env file working</li>
            <li>✓ Next.js app running at http://localhost:3000</li>
            <li>✓ AI chat responding to messages</li>
            <li>✓ Appointment booking working in the chat</li>
          </ul>
        </div>

        <p className="mb-2 text-gray-700 leading-relaxed">
          <strong>Quick test command:</strong>
        </p>
        <CodeBlock language="bash">{`# Test your complete database setup
node scripts/test-database-connection.js`}</CodeBlock>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <h4 className="font-semibold mb-2">This test will verify:</h4>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li>• Database connection works</li>
            <li>• All required tables exist</li>
            <li>• ai_metrics table has correct structure</li>
            <li>• You can insert and read data</li>
          </ul>
        </div>

        <p className="mb-6 text-gray-700 leading-relaxed">
          <strong>All checked?</strong> → Start Part A<br/>
          <strong>Issues?</strong> → Fix the failing items above first
        </p>

        <h2 id="part-a" className="text-2xl font-bold mt-10 mb-6 text-gray-900">Part A: Build Flask MLOps Service</h2>
        
        <p className="mb-6 text-gray-700 leading-relaxed italic">
          You'll create a separate Python service that tracks how well your AI is performing
        </p>

        <h3 id="project-structure" className="text-xl font-semibold mt-8 mb-4 text-gray-900">1. Create Project Structure</h3>
        
        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong>Create the MLOps service folder:</strong>
        </p>

        <p className="mb-2 text-gray-700 leading-relaxed">
          <strong>Windows:</strong>
        </p>
        <CodeBlock language="cmd">{`# In your project root directory
mkdir mlops-service
cd mlops-service`}</CodeBlock>

        <p className="mb-2 text-gray-700 leading-relaxed">
          <strong>Mac/Linux:</strong>
        </p>
        <CodeBlock language="bash">{`# In your project root directory
mkdir mlops-service
cd mlops-service`}</CodeBlock>

        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong>Create the basic file structure:</strong>
        </p>

        <p className="mb-2 text-gray-700 leading-relaxed">
          <strong>Windows:</strong>
        </p>
        <CodeBlock language="cmd">{`# Create these files (we'll fill them in step by step)
echo. > app.py
echo. > requirements.txt
echo. > .env
echo. > start.bat`}</CodeBlock>

        <p className="mb-2 text-gray-700 leading-relaxed">
          <strong>Mac/Linux:</strong>
        </p>
        <CodeBlock language="bash">{`# Create these files (we'll fill them in step by step)
touch app.py
touch requirements.txt
touch .env
touch start.sh`}</CodeBlock>

        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong>Create the basic file structure:</strong>
        </p>

        <p className="mb-2 text-gray-700 leading-relaxed">
          <strong>Windows:</strong>
        </p>
        <CodeBlock language="cmd">{`# Create these files (we'll fill them in step by step)
echo. > app.py
echo. > requirements.txt
echo. > .env
echo. > start.bat`}</CodeBlock>

        <p className="mb-2 text-gray-700 leading-relaxed">
          <strong>Mac/Linux:</strong>
        </p>
        <CodeBlock language="bash">{`# Create these files (we'll fill them in step by step)
touch app.py
touch requirements.txt
touch .env
touch start.sh`}</CodeBlock>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <h4 className="font-semibold mb-2">Your folder should now look like:</h4>
          <CodeBlock language="text">{`mlops-service/
├── app.py          # Main Flask application
├── requirements.txt # Python dependencies
├── .env            # Environment variables
└── start.sh        # Startup script`}</CodeBlock>
        </div>

        <h3 id="python-deps" className="text-xl font-semibold mt-8 mb-4 text-gray-900">2. Set Up Python Dependencies</h3>
        
        <p className="mb-2 text-gray-700 leading-relaxed">
          <strong>Create requirements.txt:</strong>
        </p>

        <CodeBlock language="txt">{`# Flask MLOps Service Dependencies with Prometheus
# Lab 2: AI Lifecycle & MLOps Integration

# Core Flask dependencies
Flask==3.0.0
Flask-CORS==4.0.0

# Prometheus monitoring
prometheus-client==0.19.0

# Database connectivity - using requests for HTTP-based database access
# This avoids psycopg2 compilation issues on newer Python versions
requests==2.31.0

# Additional utilities
python-dotenv==1.0.0

# Development and testing (optional)
pytest==7.4.3
pytest-flask==1.3.0`}</CodeBlock>

        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong>Create Python virtual environment:</strong>
        </p>

        <p className="mb-2 text-gray-700 leading-relaxed">
          <strong>Windows:</strong>
        </p>
        <CodeBlock language="cmd">{`# Create virtual environment
python -m venv venv

# Activate it
venv\\Scripts\\activate

# Install dependencies
pip install -r requirements.txt`}</CodeBlock>

        <p className="mb-2 text-gray-700 leading-relaxed">
          <strong>Mac/Linux:</strong>
        </p>
        <CodeBlock language="bash">{`# Create virtual environment
python3 -m venv venv

# Activate it
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt`}</CodeBlock>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-green-800">
            <strong>✅ Success Check:</strong> Run <code className="bg-white px-1 py-0.5 rounded text-sm font-mono">pip list</code> - you should see Flask, prometheus-client, and other packages installed.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-blue-800 mb-2">💡 What You're Building</h4>
          <p className="text-blue-700 mb-2">This Flask service will:</p>
          <ul className="text-blue-700 space-y-1 text-sm">
            <li>• Receive metrics from your Next.js chat application</li>
            <li>• Track AI performance with Prometheus (industry standard)</li>
            <li>• Provide real-time monitoring dashboard</li>
            <li>• Store metrics for historical analysis</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <h4 className="font-semibold mb-2">🪟 Windows Users - Important Notes</h4>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li>• Use <strong>Command Prompt</strong> or <strong>PowerShell</strong> (not Git Bash for Python commands)</li>
            <li>• Python command is usually <code className="bg-white px-1 py-0.5 rounded text-sm font-mono">python</code> (not <code className="bg-white px-1 py-0.5 rounded text-sm font-mono">python3</code>)</li>
            <li>• Virtual environment activation: <code className="bg-white px-1 py-0.5 rounded text-sm font-mono">venv\\Scripts\\activate</code></li>
            <li>• Use <code className="bg-white px-1 py-0.5 rounded text-sm font-mono">start.bat</code> instead of <code className="bg-white px-1 py-0.5 rounded text-sm font-mono">start.sh</code></li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Lab 2 Summary - What You Built</h2>
        
        <p className="mb-6 text-gray-700 leading-relaxed">
          Congratulations! You've successfully implemented a complete MLOps monitoring system for your AI appointment setter. Here's what you accomplished:
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">✅ Core MLOps Infrastructure</h3>
        
        <ul className="mb-6 ml-6 space-y-2">
          <li className="text-gray-700"><strong>Flask MLOps Service</strong> running on port 5001 with cross-platform compatibility</li>
          <li className="text-gray-700"><strong>Prometheus Metrics Collection</strong> tracking real-time AI performance</li>
          <li className="text-gray-700"><strong>Database Integration</strong> for historical metrics storage</li>
          <li className="text-gray-700"><strong>Next.js Integration</strong> with automatic metrics collection</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">📊 Metrics You're Now Tracking</h3>
        
        <ul className="mb-6 ml-6 space-y-2">
          <li className="text-gray-700"><strong>AI Performance:</strong> Response times, token usage, API costs</li>
          <li className="text-gray-700"><strong>Business Metrics:</strong> Appointment requests, conversion rates, human handoffs</li>
          <li className="text-gray-700"><strong>System Health:</strong> Service status, error rates, success rates</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800">
            <strong>Note:</strong> This implementation uses HTTP-based database access to avoid psycopg2 compilation issues. Your metrics collection provides valuable insights for production AI systems.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">🎯 Key URLs to Remember</h3>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <ul className="space-y-2">
            <li><strong>Health Check:</strong> <a href="http://localhost:5001/health" className="text-blue-600 hover:text-blue-800 underline" target="_blank">http://localhost:5001/health</a></li>
            <li><strong>Raw Metrics:</strong> <a href="http://localhost:5001/metrics" className="text-blue-600 hover:text-blue-800 underline" target="_blank">http://localhost:5001/metrics</a> (Prometheus format)</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <div>
            <Link href="/labs/lab1" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Lab 1: Foundation
            </Link>
          </div>
          <div>
            <Link href="/labs" className="text-blue-600 hover:text-blue-700 font-medium">
              Back to Labs →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}