import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Bookselling is the commercial trading of books which is the retail and distribution end of the publishing process. People who engage in bookselling are called booksellers, bookdealers, bookpeople, bookmen, or bookwomen.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Get Started</button>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>

      <nav class="nav-bar">
        <div class="nav1">
            <a href="">Browse Categories</a>
            <input type="text" id="search_book" placeholder="Search Book"/>
        </div>
        <h3>readbooks</h3>
        <div class="icon-about">
            <i class="material-icons"><span class="material-icons-outlined">account_circle</span></i>
            <a href="">About-Us</a>
        </div>

    </nav>

    <main>
        <div class="books">
            <div>
                <img src="https://images-na.ssl-images-amazon.com/images/I/718ReYbwlFL.jpg" alt="" class="book-img"/>
            </div>
            <div class="descp">
                <h2 class="book-name">After You</h2>
                <h3 class="author">by Jojo Myoes</h3>
                <h3 class="rating">1.987 rating</h3>
                <p class="info">
                    It continues the story of Louisa Clark after Will's death. She is trying to move on. 
                </p>
                <button type="submit">See the Book</button>
            </div>
        </div>

        <div class="books">
            <div>
                <img src="https://images-na.ssl-images-amazon.com/images/I/91JxVjINNsL.jpg" alt="" class="book-img"/>
            </div>
            <div class="descp">
                <h2 class="book-name">Big Magic</h2>
                <h3 class="author">by Elizabeth Gilbert</h3>
                <h3 class="rating">1.987 rating</h3>
                <p class="info">
                    Readers of all ages and walks of life have drawn inspiration from Elizabeth
                    Gilbert’s books.
                </p>
                <button type="submit" id="b1">See the Book</button>
            </div>
        </div>

        <div class="books">
            <div>
                <img src="https://images-na.ssl-images-amazon.com/images/I/9129dzchsGL.jpg" alt="" class="book-img"/>
            </div>
            <div class="descp">
                <h2 class="book-name">A Tale for the Time Being</h2>
                <h3 class="author">by Ruth Ozeki</h3>
                <h3 class="rating">1.987 rating</h3>
                <p class="info">
                    In Tokyo, sixteen-year-old Nao has decided there’s only one escape from her aching loneliness
                    
                </p>
                <button type="submit" id="b2">See the Book</button>
            </div>
        </div>

        <div class="books">
            <div>
                <img src="https://images-na.ssl-images-amazon.com/images/I/81djg0KWthS.jpg"
                    alt="" class="book-img"/>
            </div>
            <div class="descp">
                <h2 class="book-name">The Great Gatsby</h2>
                <h3 class="author">by F. Scott Fitzgerald</h3>
                <h3 class="rating">1.987 rating</h3>
                <p class="info">
                    The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King 
                </p>
                <button type="submit" id="b3">See the Book</button>
            </div>
        </div>

    </main>
    <div class="nav1">
            <a href="">Free Offered BOOK</a>
        </div>
    <main>
        
        <div class="books">
            <div>
                <img src="https://demo2.tokomoo.com/pustaka-el/wp-content/uploads/sites/19/2016/10/Book_008_0-330x452.jpg" alt="" class="book-img"/>
            </div>
            <div class="descp">
                <h2 class="book-name">City of Fallen Angels</h2>
                <h3 class="author">by Jojo Myoes</h3>
                <h3 class="rating">1.987 rating</h3>
                <p class="info">
                    It continues the story of Louisa Clark after Will's death. She is trying to move on. 
                </p>
                <button type="submit">See the Book</button>
            </div>
        </div>

        <div class="books">
            <div>
                <img src="https://demo2.tokomoo.com/pustaka-el/wp-content/uploads/sites/19/2016/10/Book_002-330x452.jpg" alt="" class="book-img"/>
            </div>
            <div class="descp">
                <h2 class="book-name">To All the Boys I’ve Loved Before Loved Before</h2>
                <h3 class="author">by Elizabeth Gilbert</h3>
                <h3 class="rating">1.987 rating</h3>
                <p class="info">
                    Readers of all ages and walks of life have drawn inspiration from Elizabeth
                    Gilbert’s books.
                </p>
                <button type="submit" id="b1">See the Book</button>
            </div>
        </div>

        <div class="books">
            <div>
                <img src="https://demo2.tokomoo.com/pustaka-el/wp-content/uploads/sites/19/2016/10/Book_003-330x452.jpg" alt="" class="book-img"/>
            </div>
            <div class="descp">
                <h2 class="book-name">Since You’ve Been Gone</h2>
                <h3 class="author">by Ruth Ozeki</h3>
                <h3 class="rating">1.987 rating</h3>
                <p class="info">
                    In Tokyo, sixteen-year-old Nao has decided there’s only one escape from her aching loneliness
                    
                </p>
                <button type="submit" id="b2">See the Book</button>
            </div>
        </div>

        <div class="books">
            <div>
                <img src="https://demo2.tokomoo.com/pustaka-el/wp-content/uploads/sites/19/2016/10/Book_004-330x452.jpg"
                    alt="" class="book-img"/>
            </div>
            <div class="descp">
                <h2 class="book-name">TREANA NE CONNAIT PAS LA</h2>
                <h3 class="author">by F. Scott Fitzgerald</h3>
                <h3 class="rating">1.987 rating</h3>
                <p class="info">
                    The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King 
                </p>
                <button type="submit" id="b3">See the Book</button>
            </div>
        </div>

    </main>
    </>
  );
}

export default Banner;
