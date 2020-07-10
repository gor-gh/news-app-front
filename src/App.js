import React from 'react';
import './App.css';
import {client} from './Client';
import {capitalize, searchText} from './helpers';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Logout from './components/Logout';
import HomePage from './components/HomePage/HomePage';
import CategoryPage from "./components/CategoryPage/CategoryPage";
import Article from "./components/Article/Article";
import PrivateRoute from "./components/PrivateRoute";
import {Route,Redirect, Switch} from 'react-router-dom';

class  App extends React.Component {
    state = {
        _loggedIn: false,
        searchResults: [],
        newses: []
    }
    componentDidMount() {
        if(client.isLoggedIn()){
            this.setState({_loggedIn: true})
            client.getNewses(fetchedNewses => {
                this.setState({newses: fetchedNewses});
            })
        }
    }

    loggedIn = () => {
        this.setState({_loggedIn: true},() => {
            if(client.isLoggedIn()){
                client.getNewses(fetchedNewses => {
                    this.setState({newses: fetchedNewses});
                })
            }
        })
    }
    loggedOut = () => {
        this.setState({
            _loggedIn: false,
            newses: [],
            searchResults: []
        });
    }
    performSearch = (value) => {
        const result = this.state.newses.filter(news => {
            return searchText(news.title,value);
        });
        this.setState({searchResults: result});
    }
    render(){

      return (
          <div className="App pb-4">
              <Header
                  onSearch={this.performSearch}
                  searchResults={this.state.searchResults}
                  logoutCallback={this.loggedOut}
                  isLoggedIn={this.state._loggedIn}
              />
              <Switch>
                  <Route path='/logout' component={Logout} />
                  <PrivateRoute path='/articles/:articleId' component={({match}) => {
                      const article = this.state.newses.find(news => news._id === match.params.articleId);
                      if(!article) return null;
                      return (
                          <Article
                              id={article._id}
                              title={article.title}
                              content={article.content}
                              imgUrl={article.imgUrl}
                              category={article.category}
                              createdAt={article.createdAt}
                              author={article.author}
                              source={article.sourceUrl}
                              description={article.description}
                          />
                      )
                  }}/>
                  <PrivateRoute path='/categories/:categName' component={({match}) => {
                      const categoryNewses = this.state.newses.filter(news => news.category === match.params.categName);
                      if(!categoryNewses.length) return (
                          <div className='text-center no_content'>
                              There is no article in «{capitalize(match.params.categName)}» Category.
                          </div>
                      );
                      return (
                          <CategoryPage
                              newses={categoryNewses}
                              category={match.params.categName}
                          />
                      )
                  }}/>

                  <Route
                      path='/login'
                      render={(props) => {
                          return (
                              <Login
                                  {...props}
                                  loggedInCallback={this.loggedIn}
                              />
                          )
                      }}/>

                  <PrivateRoute exact path='/' component={() => <HomePage newses={this.state.newses} />}/>

                  <Route render={() => (
                      <Redirect to='/'/>
                  )}/>
              </Switch>
          </div>
      );
    }
}

export default App;
