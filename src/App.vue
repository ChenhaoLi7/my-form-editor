<template>
  <div id="app">
    <header>
      <!-- This could be your application's navbar or top menu -->
      <nav>
        <ul>
          <li><router-link to="/">Form Editor</router-link></li>
          <li><router-link to="/preview">Form Preview</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <!-- The main content will be dynamically replaced by the router-view based on the route -->
      <router-view/>
    </main>
    <footer>
      <!-- This is the global footer for your application -->
      <p>&copy; {{ new Date().getFullYear() }} My Form Builder</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  // Any additional global components, mixins, or plugins can be declared here.
};
</script>

<style>
/* Add some basic styling for the app */
#app {
  text-align: center;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

nav {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline;
  margin-right: 20px;
}

li:last-child {
  margin-right: 0;
}

a {
  text-decoration: none;
  color: #42b983;
}

a.router-link-exact-active {
  font-weight: bold;
}

main {
  margin: 20px;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f8f9fa;
  padding: 10px 0;
  font-size: 0.9rem;
}

footer p {
  margin: 0;
}
</style>
