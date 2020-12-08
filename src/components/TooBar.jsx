import React from 'react';
import { Link } from 'react-router-dom';
const TooBar = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://getbootstrap.com/docs/5.0/components/navbar/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/movies">
          <span class="nav-link active" aria-current="page" >
            All Movies
          </span>
        </Link>
       </li>
        <li class="nav-item">
        <Link to="/playlist">
          <span className="nav-link">
          Playlist
          </span>
        </Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      < form class="d-flex">
         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>

  </div>
</nav>
    </>
  );
};

export default TooBar;