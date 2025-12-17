export function populateContactTab(el) {
  el.innerHTML = `
<h1>Contact Place</h1>

<h2>Address:</h2>
<address>
  42 Harmony Lane<br>
  Downtown District<br>
  City, State 10001
</address>

<h2>Phone:</h2>
<a href="tel:(555) 234-7890">(555) 234-7890</a>

<h2>Email:</h2>
<a href="mailto:place@example.com">place@example.com</a>

<h2>Hours:</h2>
<i>Tuesday - Thursday: 5:00 PM - 10:00 PM</i>
<i>Friday - Saturday: 5:00 PM - 11:00 PM</i>
<i>Sunday: 4:00 PM - 9:00 PM</i>
<i>Monday: Closed</i>
`;
}
