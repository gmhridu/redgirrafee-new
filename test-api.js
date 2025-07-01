// Simple test script to verify API endpoints work
// Run with: node test-api.js

const testData = {
  name: "Test User",
  email: "test@example.com", 
  company: "Test Company",
  message: "This is a test message"
};

async function testContactAPI() {
  try {
    console.log('Testing contact API...');
    
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    
    const result = await response.json();
    console.log('Contact API Response:', result);
    
    if (result.success) {
      console.log('✅ Contact API test passed!');
    } else {
      console.log('❌ Contact API test failed:', result.message);
    }
  } catch (error) {
    console.log('❌ Contact API test error:', error.message);
  }
}

async function testContactsAPI() {
  try {
    console.log('Testing contacts list API...');
    
    const response = await fetch('http://localhost:3000/api/contacts');
    const result = await response.json();
    
    console.log('Contacts API Response:', result);
    console.log('✅ Contacts API test passed!');
  } catch (error) {
    console.log('❌ Contacts API test error:', error.message);
  }
}

async function runTests() {
  console.log('🧪 Running API tests...\n');
  console.log('Make sure your dev server is running: npm run dev:full\n');
  
  await testContactAPI();
  console.log('');
  await testContactsAPI();
  
  console.log('\n🎉 Tests completed!');
}

runTests();
