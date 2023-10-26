function Navbar(){
    return(
        <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Expenses App!</span>
                <div className="d-flex">
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalExpense">Add New Expense</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;