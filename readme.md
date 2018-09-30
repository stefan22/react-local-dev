## react-local-dev starter

#### ***built-to-last***

- webpack-dev-server
- debug-by-file-name - no more bundle mumble
- eslint, eshint, babel-lint and jest-ready
- sample test files
- sample sass files
- no need for babel-cli or run different versions of it with npm
- `npm run webdev` webpack web server/watch

- babel transform-class-properties plugin lets u do this:

```
   before:
         class OldWayToDo {
            constructor() {
               this.name = 'joe';
            }
         }
   instance:
         const joe = new OldWayToDo();
         console.log(joe);

```

Save time typing:
+ no need for `constructor` or `this`
+ `name = 'tom';`
+ eslint ready

```
   now:
         class ImprovedWay {
            name = 'tom';
         }

   instance:
         const tom = new ImprovedWay();
         console.log(tom);

```

> if you'd rather have a constructor/properties, you can do that too.

#### production

- npm run build


#### tree
```
> public
   • bundle
   • index.html

> src
   > components
   > playground
   > styles
   > tests
   • app.js

.babelrc
.eslintrc
.gitignore
jest.config.json
package-lock.json
package.json
wepack.config.js
README.md
```

<br/>
<hr/>

# lifeCycle components

- other built-in methods avail to class based components
- can't be added to stateless functional components
- they fire at various times in a given components life

For ex:
- when a component first gets rendered to screen
- when it gets removed from screen
- when something in component updates like props or state

### componentDidMount
- when component first gets mounted to dom
- we never explicitly call it. It gets called internally

### componentDidUpdate
- fire off after the component updates
- after state or props values changes

```
   ex: otherwise it will update all-the-time

   //compDidUpdate takes 2 props: prevProps, prevState.
   //compare lengths and only update it lengths are different.

      componentDidUpdate(prevProps,prevState) {
      console.log('component did update');
      if (prevState.options.length !== this.state.options.length) {

      }

   }

```


```
   //these is just how i approached deleting an option by getting
   //text first, trim and split to get rid of some text and put back together
   //using slice which doesnt change original array

   //then splice which does changes orig array.

   //then use splice, inside of setState fn.
   Passed 2 arg:prevState and props //current props
   Then did my biz within and returned state.options

      componentDidUpdate(prevProps, prevState) {
         console.log('component did update');
         if (prevProps.length !== this.state.options.length) {
            console.log('saving data');
         } //if



      handleDelOption(e) {
         let tar = e.target.parentElement.textContent.trim().split('');
         tar = tar.slice(0, tar.length - 6).join(''); //ele text
         let pos = this.state.options.indexOf(tar); //ele pos

         this.setState((prevState, props) => {
            prevState.options.splice(pos, 1);
            return {
               options: this.state.options,
            };
         });
	}

```


### componentWillUnmount
- fires just before component goes away
- when we switch pages or render something completely new

```
   ReactDOM.render(React.createElement('p'),
   document.getElementById('app));

```


##### localStorage
Client-side, without databases, you can use `localstorage` and `lifeCycle` methods to save `user options` and refresh them when the user comesback. LocalStorage persists
between page loads.

```
   ex:
      localStorage.setItem('cookie','vanilla oreos');
      localStorage.getItem('cookie')
      //return json
      JSON.parse

      //send json
      JSON.stringify()
```


- persisten count w/localStorage

```
      componentDidMount() {
		console.log('componentDidMount');
      let mntCnt = localStorage.getItem('count');
      mntCnt = parseInt(mntCnt, 10);
      if (!isNaN(mntCnt)) {
         console.log(mntCnt);
         this.setState(() => {
            return {
               count: mntCnt
            }
         });
         }

      } //compDidMount

```