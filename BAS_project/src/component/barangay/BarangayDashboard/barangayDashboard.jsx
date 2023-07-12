export default function BarangayDashboard(){
    return(
        <>
            <div>
                <h1>Dashboard</h1>
                {/* where the user see the data */}
            </div>
            <div className="flex">
                <div>
                    <h1>Latest News/Events</h1>
                </div>
                <div>
                    <button type="button" className="bg-gray-300">Post</button>
                </div>
                
                {/* where display the admin post */}
            </div>
        </>
    )
}