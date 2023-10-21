function Navbar(){
    return(
        <nav class="navbar bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">Expenses App!</span>
                <div class="d-flex">
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalMovie">Add New Expense</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;