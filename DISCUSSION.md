# Future improvements

- Test coverage
- Debounce search
- React query for data fetching / caching
- Paginate the search results / table
- Sort functionality on the table headings
- Hook up Database

## Test coverage

I opted to skip adding tests for the codebase and focus on solving the errors in the code / refactoring the UI components. Ideally, I'd create a test suite for each component and any associated logic. I wound up not spending any time in the backend of this codebase, but ideally would also be getting tests set up for the server as well.

## Debounce search

If there are potentially thousands of advocates in the database, filtering a giant list on every keystroke for search might be a performance concern. It would be great to implement debounce for the search functionality to cut down on that overhead.

## ReactQuery / TanStackQuery

I work with ReactQuery a fair amount in my current position and really enjoy how it handles data fetching and caching. It also offers functionality for infinite scroll which would be helpful when there's a big list of search results. Alternatively, you can use paginated queries which takes us to my next thought.

## Paginate the search results / table

If there are potentially thousands of advocates returned by the search, it might make sense to paginate the results. The user could tab through pages to see the next set of advocates that match the search.

## Sort on table headings

If I were a user, being able to sort based on the table headings would be a great extra piece of functionality. Especially for the city and years of experience columns, I could see that being something lots of users care about.

## Hook up database

I didn't have time to look at the database set up at all, but would have liked to work on that with more time.
