export function fetchCount(amount = 1) {
  return new Promise((resolve) => {
    const response = await fetch('http://localhost:8080')
    const result = await response.json()
    resolve({ data })
  }
  );
}
