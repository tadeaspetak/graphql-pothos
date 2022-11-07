# Experiment: gql with pothos

```sh
npm i
npm start
```

Go to [http://localhost:4000](http://localhost:4000) and query data with:

```gql
query ExampleQuery(
  $orgId: ID!
  $statuses: [OrgMetricsSignupStatus!]!
  $userId: ID!
) {
  org(id: $orgId) {
    name
    computed
    metrics {
      impact
      signups {
        byStatus(status: $statuses) {
          status
          count
        }
      }
    }
  }
  user(id: $userId) {
    id
    name
    org {
      id
      name
    }
  }
}
```

with the `variables` section set to:

```json
{
  "orgId": "2",
  "statuses": ["pending", "rejected"],
  "userId": "1"
}
```
