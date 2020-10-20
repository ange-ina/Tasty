import React, { Component } from 'react';
import data from './typeData';
import CategoryMain from './CategoryMain';
import SearchBarAll from './SearchBarAll';

class Home extends Component {
     state = {
          data: [],
     };
     componentDidMount() {
          this.setState({ data: data });
     }
     render() {
          return (
               <div className='home'>
                    <div className='category'>
                         <div className="anass">
                              <h2>One thousand flavors in one place!</h2>
                              <SearchBarAll className='bgColor'/>
                         </div>
                         {this.state.data.map((elt, i) => (
                              <CategoryMain
                                   key={i}
                                   type={elt.type}
                                   url={elt.url}
                                   title={elt.title}
                              />
                         ))}
                    </div>
               </div>
          );
     }
}
export default Home;
