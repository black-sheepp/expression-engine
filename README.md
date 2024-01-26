# Frontend Developer Assignment (React & Bootstrap)

## Objective:
Create a web-based Expression Engine UI using Bootstrap and React.

## Requirements:

1. Utilize Bootstrap for styling to ensure a responsive and visually appealing UI.
2. Implement a form where users can:
    - Input connector type: AND/OR
    - Input expressions. Each expression should contain the following fields:
        - Dropdown: Rule Type with values - Age, Credit Score, Account Balance
        - Operator: >, <, ≥, ≤, =
        - Value
        - Score
3. Enable users to add and delete expressions.

## Expected Output:

```json
{
    "rules": [
        {
            "key": "age",
            "output": {
                "value": 60,
                "operator": ">=",
                "score": 50
            },
        },
        {
            "key": "age",
            "output": {
                "value": 40,
                "operator": ">=",
                "score": 100
            }
        },
        {
            "key": "account_balance",
            "output": {
                "value": 100000,
                "operator": ">=",
                "score": 200
            },
        },
    ],
    "combinator": "and"
}
```

## Code Explanation:

### App Component (App.js):
- Manages state for rules, combinator, and showOutput.
- Includes functions to add and delete expressions.
- Displays form, expression list, connector, and output components.
- Utilizes Bootstrap for styling.

### Form Component (Form.js):
- Manages state for expression input fields.
- Provides dropdowns and input fields for rule type, value, operator, and score.
- Includes a button to add expressions.

### ExpressionList Component (ExpressionList.js):
- Displays a table of expressions with rule type, value, operator, score, and delete button.

### Connector Component (Connector.js):
- Provides a dropdown to select the connector type (AND/OR).

### OutputDisplay Component (OutputDisplay.js):
- Displays the JSON data of rules and combinator.

## Usage:
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the application: `npm start`.

Feel free to reach out if you have any questions or need further clarification.

Happy coding!
Shivam# expression-engine
