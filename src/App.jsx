import "./App.css";

function App() {
  return (
    <>
      <main>
        <div className="card">
          <section className="community">
            <h1>Join our community</h1>{" "}
            <h3>30-day, hassle-free money back guarantee</h3>
            <p>
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </p>
          </section>

          <div className="flex">
            <section className="subscription">
              <h2>Monthly Subscription</h2>
              <div className="price">
                <span className="monthly-price">$29</span>{" "}
                <span className="pm">per month</span>
              </div>{" "}
              <p>Full access for less than $1 a day</p>
              <button>Sign Up</button>
            </section>

            <section className="why">
              <h2>Why Us</h2>{" "}
              <ul>
                <li>Tutorials by industry experts</li>
                <li> Peer &amp; expert code review</li>
                <li> Coding exercises</li>
                <li> Access to our GitHub repos</li>
                <li> Community forum</li> <li>Flashcard decks</li>
                <li> New videos every week</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
