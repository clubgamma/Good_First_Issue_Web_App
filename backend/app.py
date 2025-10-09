# backend/app.py

from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

# Initialize the Flask App
app = Flask(__name__)

# Apply CORS to your app to allow frontend requests
CORS(app) 

GITHUB_API_URL = "https://api.github.com/search/issues"

@app.route("/api/gfi", methods=["GET"])
def get_gfi_issues():
    # Get the 'language' parameter from the request URL (e.g., /api/gfi?language=Python)
    language = request.args.get("language", None)
    
    # Base query to find open "good first issues"
    query = "label:\"good first issue\" state:open"
    
    # If a language is specified, add it to the query
    if language:
        query += f" language:{language}"

    # Parameters for the GitHub API request
    params = {
        "q": query,
        "sort": "updated",
        "order": "desc",
        "per_page": 20  # Fetch 20 issues per request
    }
    
    headers = {"Accept": "application/vnd.github+json"}

    try:
        response = requests.get(GITHUB_API_URL, headers=headers, params=params)
        response.raise_for_status()  # Raise an exception for bad status codes (4xx or 5xx)
        data = response.json()

        issues = []
        for item in data.get("items", []):
            # Extract repository name from its URL
            repo_name = item.get("repository_url", "").split("/")[-1]
            
            issues.append({
                "title": item.get("title"),
                "url": item.get("html_url"),
                "repository": repo_name,
                "labels": [label.get("name") for label in item.get("labels", [])]
            })

        return jsonify({
            "language_filter": language or "any",
            "count": len(issues),
            "issues": issues
        })

    except requests.exceptions.RequestException as e:
        # Handle API request errors gracefully
        return jsonify({"error": str(e)}), 500

# This part allows you to run the app directly with 'python app.py'
if __name__ == "__main__":
    app.run(debug=True, port=5000) # Runs on http://localhost:5000