function Breadcrumb({drinkName}) {
    return (
        <div className="row c-breadcrumbs">
            <div className="col">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Cheers</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{drinkName}</li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}

export default Breadcrumb;