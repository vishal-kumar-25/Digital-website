// Get the search query from the URL
const params = new URLSearchParams(window.location.search);
const query = params.get('q') ? params.get('q').toLowerCase() : '';

// Display the query in the page
document.getElementById('query').textContent = query || 'No query';

// Simulated search results based on the query
const results = document.getElementById('results');

// Define some predefined search content for demonstration
const searchData = {
  'drone': 'Drones are unmanned aerial vehicles (UAVs) used for a variety of purposes such as aerial photography, surveillance, and delivery of goods. Drones are also widely used in military and industrial applications.',
  'ai': 'Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are designed to think and act like humans. It encompasses areas like machine learning, robotics, and neural networks.',
  'software': 'Software is a collection of instructions that tell a computer how to work. It is typically divided into system software and application software.'
};

// Check if the query matches any predefined data
if (query in searchData) {
  results.innerHTML = `<p>${searchData[query]}</p>`;
} else {
  results.innerHTML = `<p>No results found for "${query}". Try searching for "drone", "ai", or "software".</p>`;
}
