import React from 'react'
import Apply from './Apply'



function Career() {
    return (
        <>
            <div className="cotainer h-full m-8">
                <Apply
                    jobTitle="Data Center Technician" experience="4 years"
                    jobDescription="We are seeking a skilled and detail-oriented Data Center Technician to join our team. The ideal candidate will be responsible for maintaining and managing data center operations, ensuring hardware functionality, and troubleshooting technical issues. Your expertise in ensuring uptime and operational efficiency will play a key role in supporting our infrastructure."
                />
                <Apply
                    jobTitle="Network Administrator/Engineer"
                    experience="3 years"
                    jobDescription="We are seeking a skilled and detail-oriented Network Administrator/Engineer to join our team. The ideal candidate will be responsible for ensuring stable network connectivity within and outside the data center. You will manage and troubleshoot firewalls, routers, switches, and load balancers to maintain optimal network performance and security. Your expertise will be critical in supporting our IT infrastructure and ensuring seamless operations."
                />

            </div>
        </>
    )
}

export default Career