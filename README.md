
# Microfrontends


#### Installing microfrontends

Creating micro frontend 1

```
npx create-mf-app mf1
```
The following questions are asked.

```
? Pick the name of your app: mf1
? Project Type: Application
? Port number: 3001
? Framework: react
? Language: javascript
? CSS: CSS
Your 'mf1' project is ready to go.

Next steps:

▶️ cd mf1
▶️ npm install
▶️ npm start
```

Similarly Creating micro frontend 2

```
npx create-mf-app mf2
```

```
? Pick the name of your app: mf2
? Project Type: Application
? Port number: 3002
? Framework: react
? Language: javascript
? CSS: CSS
Your 'mf2' project is ready to go.

Next steps:

▶️ cd mf2
▶️ npm install
▶️ npm start

```

#### Configuring components to expose 

* Go to wepack.config.js

* Update the plugins configuratiions for ModuleFedrationPlugin as belwo

```
new ModuleFederationPlugin({
      name: "mf1",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Header":"./src/Header.jsx",
        "./Footer":"./src/Footer.jsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
}),

```
* Restart the app.

* Now following is added which is manifest of all the components exposed

```
http://localhost:3001/remoteEntry.js
```

Now, go to mf2 add the below config to wepack.config.js

* Restart the app.(mf2)


* Now we can import the modules

```
import Footer from "mf1/Footer";
import Header from "mf1/Header";
```