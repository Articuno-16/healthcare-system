//css
import '../CSS/blog.css'

//bootstrap
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Pagination from 'react-bootstrap/Pagination'

//icons
import { FaUser } from 'react-icons/fa'
import { FaComment } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'

// img
import sgblog1 from '../assets/images/singleblog1.png'
import sgblog2 from '../assets/images/singleblog2.png'
import sgblog3 from '../assets/images/singleblog3.png'
import sgblog4 from '../assets/images/singleblog4.png'
import sgblog5 from '../assets/images/singleblog5.png'
import post1 from '../assets/images/post_1.png'
import post2 from '../assets/images/post_2.png'
import post3 from '../assets/images/post_3.png'
import post4 from '../assets/images/post_4.png'
import post5 from '../assets/images/post_5.png'
import post6 from '../assets/images/post_6.png'
import post7 from '../assets/images/post_7.png'
import post8 from '../assets/images/post_8.png'
import post9 from '../assets/images/post_9.png'
import post10 from '../assets/images/post_10.png'

const Blog = () => {
    return (
        <div class="blog">
        <div className='banner-blog'>
        <h2>Blog</h2>
        <p>
        <a style={{color: 'white', textDecoration: 'none'}} href="/home">Home</a>
        / Blog
        </p>
    </div>

        <Container className='blog-area'>
            <Row className='blog-content'>
                <Col className='blog-news'>
                <Card className='card-blog' style={{ width: '100%' , marginTop: '50px' }}>
      <Card.Img variant="top" src={sgblog1} />
      <Card.Body style={{marginTop: '50px'}}>
        <a href='/blog' className='blog-date btn btn-primary'>
                <p>
                <strong>15</strong><br></br>
                Jan
                </p>
        </a>
        <Card.Title><a style={{color: 'black', textDecoration: 'none'}} href="/blog">Google inks pact for new 35-storey office</a></Card.Title>
        <Card.Text>
        <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
        <p className='link-blog'>
        <a href='/blog' style={{textDecoration: 'none', color: 'black', fontSize: '15px'}}><FaUser style={{paddingRight: '5px', color: 'black' , fontSize: '15px'}}></FaUser>Travel, Lifestyle </a> 
        |<a href='/blog' style={{textDecoration: 'none', color: 'black', fontSize: '15px'}}> <FaComment style={{paddingRight: '5px', color: 'black', fontSize: '15px'}}></FaComment>03 Comments</a>
        </p>
        </Card.Text>
       
      </Card.Body>
    </Card>

    <Card className='card-blog' style={{ width: '100%' , marginTop: '50px'}}>
      <Card.Img variant="top" src={sgblog2} />
      <Card.Body style={{marginTop: '50px'}}>
        <a href='/blog' className='blog-date btn btn-primary'>
                <p>
                <strong>15</strong><br></br>
                Jan
                </p>
        </a>
        <Card.Title><a style={{color: 'black', textDecoration: 'none'}} href="/blog">Google inks pact for new 35-storey office</a></Card.Title>
        <Card.Text>
        <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
        <p className='link-blog'>
        <a href='/blog' style={{textDecoration: 'none', color: 'black', fontSize: '15px'}}><FaUser style={{paddingRight: '5px', color: 'black' , fontSize: '15px'}}></FaUser>Travel, Lifestyle </a> 
        |<a href='/blog' style={{textDecoration: 'none', color: 'black', fontSize: '15px'}}> <FaComment style={{paddingRight: '5px', color: 'black', fontSize: '15px'}}></FaComment>03 Comments</a>
        </p>
        </Card.Text>
       
      </Card.Body>
    </Card>

    <Card className='card-blog' style={{ width: '100%' , marginTop: '50px'}}>
      <Card.Img variant="top" src={sgblog3} />
      <Card.Body style={{marginTop: '50px'}}>
        <a href='/blog' className='blog-date btn btn-primary'>
                <p>
                <strong>15</strong><br></br>
                Jan
                </p>
        </a>
        <Card.Title><a style={{color: 'black', textDecoration: 'none'}} href="/blog">Google inks pact for new 35-storey office</a></Card.Title>
        <Card.Text>
        <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
        <p className='link-blog'>
        <a href='/blog' style={{textDecoration: 'none', color: 'black', fontSize: '15px'}}><FaUser style={{paddingRight: '5px', color: 'black' , fontSize: '15px'}}></FaUser>Travel, Lifestyle </a> 
        |<a href='/blog' style={{textDecoration: 'none', color: 'black', fontSize: '15px'}}> <FaComment style={{paddingRight: '5px', color: 'black', fontSize: '15px'}}></FaComment>03 Comments</a>
        </p>
        </Card.Text>
       
      </Card.Body>
    </Card>

    <Card className='card-blog' style={{ width: '100%' , marginTop: '50px'}}>
      <Card.Img variant="top" src={sgblog4} />
      <Card.Body style={{marginTop: '50px'}}>
        <a href='/blog' className='blog-date btn btn-primary'>
                <p>
                <strong>15</strong><br></br>
                Jan
                </p>
        </a>
        <Card.Title><a style={{color: 'black', textDecoration: 'none'}} href="/blog">Google inks pact for new 35-storey office</a></Card.Title>
        <Card.Text>
        <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
        <p className='link-blog'>
        <a href='/blog' style={{textDecoration: 'none', color: 'black', fontSize: '15px'}}><FaUser style={{paddingRight: '5px', color: 'black' , fontSize: '15px'}}></FaUser>Travel, Lifestyle </a> 
        |<a href='/blog' style={{textDecoration: 'none', color: 'black', fontSize: '15px'}}> <FaComment style={{paddingRight: '5px', color: 'black', fontSize: '15px'}}></FaComment>03 Comments</a>
        </p>
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card className='card-blog' style={{ width: '100%' , marginTop: '50px'}}>
      <Card.Img variant="top" src={sgblog5} />
      <Card.Body style={{marginTop: '50px'}}>
        <a href='/blog' className='blog-date btn btn-primary'>
                <p>
                <strong>15</strong><br></br>
                Jan
                </p>
        </a>
        <Card.Title><a style={{color: 'black', textDecoration: 'none'}} href="/blog">Google inks pact for new 35-storey office</a></Card.Title>
        <Card.Text>
        <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
        <p className='link-blog'>
        <a href='/blog' style={{textDecoration: 'none', color: 'black', fontSize: '15px'}}><FaUser style={{paddingRight: '5px', color: 'black' , fontSize: '15px'}}></FaUser>Travel, Lifestyle </a> 
        |<a href='/blog' style={{textDecoration: 'none', color: 'black', fontSize: '15px'}}> <FaComment style={{paddingRight: '5px', color: 'black', fontSize: '15px'}}></FaComment>03 Comments</a>
        </p>
        </Card.Text>
      </Card.Body>
    </Card>
    
    <Pagination className='pagination'>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
                </Col>

                <Col className='blog-catergory'>
                    <Form className='blog-search'>
                    <Form.Group className="gr-blog-search mb-3" controlId="formBasicSearch">
                    <Form.Control className='input-search' type="text" placeholder="Search Keyword" />
                    <Button className='icon-search'><FaSearch></FaSearch></Button>
                   </Form.Group>
                   <Button variant='white' type='submit' className='btn-search'>SEARCH</Button>
                    </Form>
                   
                   <ListGroup variant='flush' className='list-group-category'>
                    <ListGroup.Item className='item'><h3>Category</h3></ListGroup.Item>
                    <ListGroup.Item className='item'><a href='/blog'>Restaurant food(37)</a></ListGroup.Item>
                    <ListGroup.Item className='item'><a href='/blog'>Travel news(10)</a></ListGroup.Item>
                    <ListGroup.Item className='item'><a href='/blog'>Modern technology(03)</a></ListGroup.Item>
                    <ListGroup.Item className='item'><a href='/blog'>Product(11)</a></ListGroup.Item>
                    <ListGroup.Item className='item'><a href='/blog'>Inspiration(21)</a></ListGroup.Item>
                    <ListGroup.Item className='item'><a href='/blog'>Health Care (21)</a></ListGroup.Item>
                   </ListGroup>
                   
                   <ListGroup variant='flush' className='lgr-recent-post'>
                    <ListGroup.Item className='item'><h3>Recent Post</h3></ListGroup.Item>
                    <ListGroup.Item className='item-recent-post'>
                        <img src={post1} alt="recent-post"></img>
                        <div className='post-info'>
                        <a href='/blog'>From life was you fish...</a>
                        <p>January 12, 2019</p>
                        </div>
                        </ListGroup.Item>
                        <ListGroup.Item className='item-recent-post'>
                        <img src={post2} alt="recent-post"></img>
                        <div className='post-info'>
                        <a href='/blog'>The Amazing Hubble</a>
                        <p>02 Hours ago</p>
                        </div>
                        </ListGroup.Item>
                        <ListGroup.Item className='item-recent-post'>
                        <img src={post3} alt="recent-post"></img>
                        <div className='post-info'>
                        <a href='/blog'>Astronomy Or Astrology</a>
                        <p>03 Hours ago</p>
                        </div>
                        </ListGroup.Item>
                        <ListGroup.Item className='item-recent-post'>
                        <img src={post4} alt="recent-post"></img>
                        <div className='post-info'>
                        <a href='/blog'>Asteroids telescope</a>
                        <p>01 Hours ago</p>
                        </div>
                        </ListGroup.Item>
                   </ListGroup>

                   <ListGroup variant='flush' className='lgr-tag-clouds'>
                    <ListGroup.Item className='item'><h3>Tag Clouds</h3></ListGroup.Item>
                    <ListGroup.Item className='item-tag-clouds'>
                        <a href='/blog'>project</a>
                        <a href='/blog'>love</a>
                        </ListGroup.Item>
                        <ListGroup.Item className='item-tag-clouds'>
                        <a href='/blog'>technology</a>
                        <a href='/blog'>travel</a>
                        </ListGroup.Item>
                        <ListGroup.Item className='item-tag-clouds'>
                        <a href='/blog'>restaurant</a>
                        <a href='/blog'>life style</a>
                        </ListGroup.Item>
                        <ListGroup.Item className='item-tag-clouds'>
                        <a href='/blog'>design</a>
                        <a href='/blog'>illustration</a>
                        </ListGroup.Item>
                   </ListGroup>

                   <ListGroup variant='flush' className='list-groups-instagram-feeds'>
                    <ListGroup.Item className='item'><h3>Instagram Feeds</h3></ListGroup.Item>
                    <ListGroup.Item className='item-instagram-feeds'>
                        <a href='/blog'><img src={post5} alt="instagram"></img></a>
                        <a href='/blog'><img src={post6} alt="instagram"></img></a>
                        <a href='/blog'><img src={post7} alt="instagram"></img></a>
                        </ListGroup.Item>
                        <ListGroup.Item className='item-instagram-feeds'>
                        <a href='/blog'><img src={post8} alt="instagram"></img></a>
                        <a href='/blog'><img src={post9} alt="instagram"></img></a>
                        <a href='/blog'><img src={post10} alt="instagram"></img></a>
                        </ListGroup.Item>
                   </ListGroup>

                   <ListGroup variant='flush' className='list-groups-newsletter'>
                    <ListGroup.Item className='item'><h3>Newsletter</h3></ListGroup.Item>
                    <ListGroup.Item className='item-newsletter'>
                        <Form>
                        <Form.Group className="newsletter mb-3" controlId="formBasicSearch">
                    <Form.Control className='input-search' type="email" placeholder="Enter Email" />
                   </Form.Group>
                   <Button variant='white' type='submit' className='btn btn-subscribe'>SUBSCRIBE</Button>
                        </Form>
                        </ListGroup.Item>
                   </ListGroup>
                </Col>
            </Row>
        </Container>
    </div>

    )
}
export default Blog