// app/(main)/page.jsx
export default function SomeUI() {
    return (
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="hero bg-base-200 rounded-box p-8">
            <div className="hero-content text-center">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold text-primary">DaisyUI Theme Showcase</h1>
                <p className="py-6 text-lg">
                  This page demonstrates various DaisyUI components with theme-sensitive classes.
                  Try switching themes to see how these elements change!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="btn btn-primary">Primary</button>
                  <button className="btn btn-secondary">Secondary</button>
                  <button className="btn btn-accent">Accent</button>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Heading Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-primary pl-3">Heading Styles</h2>
          <div className="grid gap-4">
            <h3 className="text-2xl font-bold text-primary">Primary Heading</h3>
            <h3 className="text-2xl font-bold text-secondary">Secondary Heading</h3>
            <h3 className="text-2xl font-bold text-accent">Accent Heading</h3>
            <h3 className="text-2xl font-bold text-base-content border-b-2 border-primary pb-1">Underlined Primary</h3>
            <h3 className="text-2xl font-bold text-base-content border-b-2 border-secondary pb-1">Underlined Secondary</h3>
          </div>
        </section>
  
        {/* Cards Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-secondary pl-3">Cards Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="card bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Primary Card</h2>
                <p>This card uses the primary theme color as its background.</p>
                <div className="card-actions justify-end">
                  <button className="btn">More info</button>
                </div>
              </div>
            </div>
  
            {/* Card 2 */}
            <div className="card bg-secondary text-secondary-content">
              <div className="card-body">
                <h2 className="card-title">Secondary Card</h2>
                <p>This card uses the secondary theme color as its background.</p>
                <div className="card-actions justify-end">
                  <button className="btn">More info</button>
                </div>
              </div>
            </div>
  
            {/* Card 3 */}
            <div className="card bg-accent text-accent-content">
              <div className="card-body">
                <h2 className="card-title">Accent Card</h2>
                <p>This card uses the accent theme color as its background.</p>
                <div className="card-actions justify-end">
                  <button className="btn">More info</button>
                </div>
              </div>
            </div>
  
            {/* Card 4 */}
            <div className="card bg-base-100 shadow-xl border border-primary">
              <div className="card-body">
                <h2 className="card-title text-primary">Primary Bordered</h2>
                <p>This card has a primary color border with base background.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Action</button>
                </div>
              </div>
            </div>
  
            {/* Card 5 */}
            <div className="card bg-base-100 shadow-xl border border-secondary">
              <div className="card-body">
                <h2 className="card-title text-secondary">Secondary Bordered</h2>
                <p>This card has a secondary color border with base background.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondary">Action</button>
                </div>
              </div>
            </div>
  
            {/* Card 6 */}
            <div className="card bg-neutral text-neutral-content">
              <div className="card-body">
                <h2 className="card-title">Neutral Card</h2>
                <p>This card uses the neutral theme color as its background.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Action</button>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Buttons Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-accent pl-3">Button Variations</h2>
          <div className="bg-base-200 p-6 rounded-box">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-accent">Accent</button>
              <button className="btn btn-neutral">Neutral</button>
              <button className="btn btn-info">Info</button>
              <button className="btn btn-success">Success</button>
              <button className="btn btn-warning">Warning</button>
              <button className="btn btn-error">Error</button>
              <button className="btn btn-ghost">Ghost</button>
              <button className="btn btn-link">Link</button>
              <button className="btn btn-outline btn-primary">Outline Primary</button>
              <button className="btn btn-outline btn-secondary">Outline Secondary</button>
            </div>
          </div>
        </section>
  
        {/* Alert and Message Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-neutral pl-3">Alerts & Messages</h2>
          <div className="grid gap-4">
            <div className="alert alert-info">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Info message with theme-sensitive styling.</span>
            </div>
            <div className="alert alert-success">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Success message with theme-sensitive styling.</span>
            </div>
            <div className="alert alert-warning">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>Warning message with theme-sensitive styling.</span>
            </div>
            <div className="alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Error message with theme-sensitive styling.</span>
            </div>
          </div>
        </section>
  
        {/* Border Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-info pl-3">Border Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border-2 border-primary rounded-lg text-center">
              <p className="font-bold">Primary Border</p>
            </div>
            <div className="p-6 border-2 border-secondary rounded-lg text-center">
              <p className="font-bold">Secondary Border</p>
            </div>
            <div className="p-6 border-2 border-accent rounded-lg text-center">
              <p className="font-bold">Accent Border</p>
            </div>
            <div className="p-6 border-2 border-neutral rounded-lg text-center">
              <p className="font-bold">Neutral Border</p>
            </div>
            <div className="p-6 border-t-4 border-primary text-center">
              <p className="font-bold">Primary Top Border</p>
            </div>
            <div className="p-6 border-r-4 border-secondary text-center">
              <p className="font-bold">Secondary Right Border</p>
            </div>
            <div className="p-6 border-b-4 border-accent text-center">
              <p className="font-bold">Accent Bottom Border</p>
            </div>
            <div className="p-6 border-l-4 border-neutral text-center">
              <p className="font-bold">Neutral Left Border</p>
            </div>
          </div>
        </section>
  
        {/* Progress and Stats */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-success pl-3">Progress & Stats</h2>
          <div className="grid gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-primary font-bold">Primary Progress</p>
              <progress className="progress progress-primary w-full" value="40" max="100"></progress>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-secondary font-bold">Secondary Progress</p>
              <progress className="progress progress-secondary w-full" value="60" max="100"></progress>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-accent font-bold">Accent Progress</p>
              <progress className="progress progress-accent w-full" value="80" max="100"></progress>
            </div>
            
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <div className="stat-title">Total Likes</div>
                <div className="stat-value text-primary">25.6K</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
              
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div className="stat-title">Page Views</div>
                <div className="stat-value text-secondary">2.6M</div>
                <div className="stat-desc">14% more than last month</div>
              </div>
              
              <div className="stat">
                <div className="stat-figure text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </div>
                <div className="stat-title">Tasks Done</div>
                <div className="stat-value text-accent">86%</div>
                <div className="stat-desc">31 tasks remaining</div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body text-center">
              <h2 className="card-title text-2xl justify-center mb-2">Experience the Power of Theme Switching</h2>
              <p className="mb-6">Try different themes to completely transform the look and feel of this page!</p>
              <div className="flex justify-center gap-4 flex-wrap">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-outline btn-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }