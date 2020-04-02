import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sectors = [
	"Governments at all levels"
,	"Manufacturing"
,	"Oil and Gas"
,	"Solid Minerals"
,	"Construction"
,	"Chemicals"
,	"Industrial Metals & Mining"
,	"Banking"
,	"Real Estate"
,	"Financial Services"
,	"Hotel, Tourism and Leisure"
,	"Non for Profit"
,	"Technology and Telecommunications"
,	"Professional Services"
,	"Transportation"
,	"Automobiles"
,	"Food and Beverages"
,	"Textile"

];

  services =  [
    {
      name: 'Audit and Assurance Services',
      one_line : 'With technological advancement and changing global economy, the requirements of today’s audit and attest services are no longer the same with the traditional approach.',
      short_description : 'Though, Audit remains an independent service that enhances the credibility of assertion and information used by investors, stakeholders and the general public, the approach, experience and expertise of the firm concerned have the capacity to affect the credence and quality of such service, report and assertion.<br>',
      description : 'With technological advancement and changing global economy, the requirements of today’s audit and attest services are no longer the same with the traditional approach. Though, Audit remains an independent service that enhances the credibility of assertion and information used by investors, stakeholders and the general public, the approach, experience and expertise of the firm concerned have the capacity to affect the credence and quality of such service, report and assertion.<br>' +
        'At EOAC, we use the audit approach suitable to each client, and prior to performing detailed procedures, we focus on understanding and evaluating the environment in which your organization operates; assessing the key management systems and controls. We review the internal audit and its work programme to determine the extent of reliance that might be placed on it. We plan and perform our audit in accordance with International Standard on Auditing (ISA), using Advance Technology and Computer Assisted Audit Techniques. This enables us provide services tailored to express a fair opinion of your financial condition and operations.<br>',
      list_title : 'Our Audit and Assurance Services:',
      list : [
        "Statutory Audit",
        "Special Investigation",
        "Attestation Services",
        "Management Audit",
        "Value for Money Audit",
        "Revenue Audit",
        "Acquisition Audits",
        "Internal Control System Audit",
        "Regulatory Compliance and Reporting",
        "Process and Physical Audit"

      ],
      image : 'assets/img/services/1.jpg',
      link : 'audit-and-assurance'
    },

    {
      name: 'Information and Communications Technology (ICT)',
      one_line : 'With technological advancement and changing global economy, the requirements of today’s audit and attest services are no longer the same with the traditional approach.',
      short_description : 'Though, Audit remains an independent service that enhances the credibility of assertion and information used by investors, stakeholders and the general public, the approach, experience and expertise of the firm concerned have the capacity to affect the credence and quality of such service, report and assertion.<br>',
      description : 'The ever-increasing importance of information and communications technology (ICT) to the survival and success of organisations cannot be over emphasised. From word processing, to networking, to the internet, to e-commerce, IT has become the driving force in today’s global economy. With IT, the challenges normally face by most organisations in such areas as revenue and process automation, payroll; human resources, accounting and supply chain management are overcome.\n' +
        'The degree of sophistication of both information, planning and control systems is a prominent factor in determining the success or failure of organisational growth which becomes increasingly important as organisation grows larger and more complicated.\n',
      list_title : 'EOAC will always be at your service in the following areas:',
      list : [
        "Automation and Computerization",
        "Provision of e-commerce services/solutions",
        "Content Development and System Integration",
        "Accounting Software Training and Implementation",
        "Computerization of Personnel and Inventory Systems",
        "System analysis design",
        "Hardware Procurement and Installation",
        "Database Management",
      ],
      image : 'assets/img/services/2.jpg',
      link : 'ict-and-communications'
    },

    {
      name: 'Internally Generated Revenue (IGR) and Automation',
      one_line : 'Tax awareness and compliance are becoming more popular across the globe.',
      short_description : 'This is aided by the renewed drive for more revenue to meet the various needs of the government. Other factors include tax audits, investigations and enforcements. Adequate tax planning and management are critical to the success of every organisation and these require the services of experts.',
      description : '<p>In these days of revenue dwindling, government at all levels are continuously exploring ways and means to boost their revenue base, utilising available sources optimally, blocking leakages, evolve financial discipline and accountability in order to meet their enormous objectives. It is also pertinent to know that allocations and grants are no longer adequate, therefore, there is an urgent need to alternate them with internal reliance. Today, there is a clamour for MDAs, state and local Government to generate revenue internally. The question on how, remains unanswered until the right experts are sought.</p>\n' +
        '\n' +
        '<h3>Revenue Automation</h3>\n' +
        '<p>\n' +
        '  At EOAC, we have Revenue Automation Solution that will adequately help to drive your revenue growth exponentially and integrate them. One of the major challenges on tax and other statutory compliance is the uneasy processes. A good number of taxpayers, both in the formal and informal sectors will happily comply if the processes are made convenient through automation which will enable them, at the comfort of their homes, offices or anywhere do registration, self-assessments, make returns and payments and generally interface with revenue authorities.  \n' +
        '</p>\n' +
        '<p>\n' +
        '  All you need is our tested and trusted revenue experts and drivers, who use technologies solution with functions as Interface Management, Enumeration, Registration, Returns and Payments Processing, Debt Management and Enforcement, Revenue Accounting, Case Management and Workflow, Audits and Investigations, Objections & Appeal, Resolution and Reporting.\n' +
        '</p>\n',
      list_title : 'Other areas we help both the government and private organisations include revenue boost and recovery of unremitted/lost revenue, assets and bad debts:',
      list : [
        "Assets and Payments Verification and Recovery",
        "Audit of Bank Charges, Interest and unauthorised debit",
        "Wealth Advisory and Asset Management" ,
        "Debt Management and Recovery",
        "Project Monitoring and Evaluation"
      ],
      image : 'assets/img/services/3.jpg',
      link : 'igr-and-automation'
    },

    {
      name: 'Tax',
      one_line : 'Tax awareness and compliance are becoming more popular across the globe.',
      short_description : 'This is aided by the renewed drive for more revenue to meet the various needs of the government. Other factors include tax audits, investigations and enforcements. Adequate tax planning and management are critical to the success of every organisation and these require the services of experts.',
      description : 'Tax awareness and compliance are becoming more popular across the globe. This is aided by the renewed drive for more revenue to meet the various needs of the government. Other factors include tax audits, investigations and enforcements. Adequate tax planning and management are critical to the success of every organisation and these require the services of experts.\n' +
        'EOAC is one of the leading tax consulting firms globally, and highly reputed for her integrity, competence and expertise. We have coordinated several tax projects for government at all levels and offered sound advice to our clients on important tax development and business issues for potential maximum tax advantage. Our wide range clients find tax compliance and obtaining relevant tax documents and clearance certificates pleasurable because of our in-depth understanding of tax issues and regulations.\n' +
        'Specifically, EOAC has contributed immensely to tax development in the country and:\n' +
        ',\tOn several occasions, led/coordinated other audit firms and tax Consultants/Practitioners for tax and other revenue audits, verifications, reconciliations and recovery of unremitted revenues for federal, state and local governments\n' +
        ',\tOffered Support Services to Federal Inland Revenue Service (FIRS) for the implementation of Integrated Tax Administration System (ITAS)\n' +
        ',\t Successfully mediated and resolved tax issues between Federal, State tax authorities and Ministries, Departments and Agencies (MDAs), foreign and local organizations\n' +
        ',\tProvided capacity building to support FIRS, MDAs and Tax Consultants\n' +
        ',\tContributed to major institutional and regulatory reforms\n',
      list_title : 'We have dedicated team that specialises in tax advisory services to our clients operating in all sectors of the economy with core tax service areas: ',
      list : [

        "Companies Income Tax (CIT)",
        "Withholding Tax Management (WHT)",
        "Value Added Tax Management (VAT)",
        "Payroll Services/Payroll Restructuring/Personal Income Tax",
        "Corporate Tax Management",
        "Global Tax Compliance/International Tax Services",
        "Tax Audit and Investigation",
        "Controversy and Dispute Resolution",
        "Training and Development on tax matters and contemporary issues on taxation",
        "Tax Planning and Tax Health Check",
        "Tax Accounting Services",
        "Transfer pricing"
      ],
      image : 'assets/img/services/4.jpg',
      link : 'tax'
    },

    {
      name: 'Forensic Services',
      one_line : 'At EOAC, we offer Forensic Services to our wide range of clients.',
      short_description : 'Our uniqueness is the ability of our forensic team to promptly analyse, interpret, summarise and present complex financial and business related issues clearly and concisely, both in and outside a courtroom setting.',
      description : '<p>\n' +
        '  At EOAC, we offer Forensic Services to our wide range of clients. Our uniqueness is the ability of our forensic team to promptly analyse, interpret, summarise and present complex financial and business related issues clearly and concisely, both in and outside a courtroom setting. Our forensic team is grounded in accounting, audit, legal concepts and procedures, engineering, medicine and other disciplines.  \n' +
        '</p>\n' +
        '\n' +
        '<p>\n' +
        '  Prior to the development of a detailed plan of action, we first engage in a preliminary investigation to gain complete understanding of the issues. We develop computerised applications to assist in the analysis and presentation of financial and non-financial evidence that will ultimately aid our findings in the form of reports, exhibits and collections of documents.\n' +
        '</p>\n',
      list_title : 'EOAC can conveniently assist you in: ',
      list : [
        "Forensic and Investigation",
        ",	Obtaining documentation necessary to support or refute a claim.",
        ",	Review of the relevant documentation to form an initial assessment of the case and identify areas of loss.", 'Forensic and Investigation',
        'Examination for Discovery to review the testimony, assist with understanding the financial issues and to formulate additional questions to be asked',

        'Investigate and analyse financial and non-financial evidence',
        'Review of the factual situation and provision of suggestions regarding possible courses of action',
        'Litigation support',
        'Expert Testimony',
        'Protection and recovery of assets',
        'Settlement discussions and negotiations',
        'Attendance at trial to hear the testimony of the opposing expert and to provide assistance with cross-examination Legal proceedings, including testifying in court as an expert witness and preparing visual aids to support trial evidence',
        'Special assignment and Investigation'

      ],
      image : 'assets/img/services/5.jpg',
      link : 'forensics'
    },

    {
      name: 'Accounting Services',
      one_line : 'At EOAC, we offer Forensic Services to our wide range of clients.',
      short_description : 'Our uniqueness is the ability of our forensic team to promptly analyse, interpret, summarise and present complex financial and business related issues clearly and concisely, both in and outside a courtroom setting.',
      description : 'The type of financial records, documentations and reports in any organization are direct product of the system in place.  Owners, donors and other interest group/stakeholders are keen on how prudently the available resources are being utilised for the realisation of their set goals and objectives. Therefore, proper and reliable accounting system has the capacity to lay credence to such reports. We carry out detailed review of your system and procedures. During the process, our team examines and evaluates all operating facets of your oganisation, develop strategies to overcome any problem identified and guide you in implementing recommendations. A follow up team also works with you to monitor the on-going performance and effectiveness of the programmes put in place.',
      list_title : 'EOAC team will specifically help you in the following areas: ',
      list : [
        "Book-keeping and Accounts",
        "Review of Accounting Systems",
        "Accounting System Development and Installation",
        "Accounts Segmentation",
        'Review and Installation of Internal Audit System',
        'Fixed Assets Management',
        'Payroll Services',
        'Cash Management and Credit Control',
        'Management Accounts and Reports',
        'Stock Accounting and Management',
        'Corporate Reporting Improvement',

      ],
      image : 'assets/img/services/6.jpg',
      link : 'accounting'
    },

    {
      name: 'Financial Advisory Services',
      one_line : 'In response to global economic situation, investors, chief executives, financial and business managers and government are in dire need of possible ways of utilising available scarce resources optimally',
      short_description : 'through reliable and profitable investment portfolios',
      description : 'In response to global economic situation, investors, chief executives, financial and business managers and government are in dire need of possible ways of utilising available scarce resources optimally through reliable and profitable investment portfolios. Organisational restructuring, reorganisation and repositioning remain continuing phenomenon. We have team of trusted, experience and reliable financial analysts/experts and sound advisers to guide you to make informed decision.',
      list_title : 'EOAC will help you in: ',
      list : [
        "Due Diligence Studies",
        "Value for Money Studies",
        "Business Plan/Feasibility Study"
        ,	"Wealth Advisory and Asset Management"
        ,	"Investment Management and Appraisal"
        ,	"Credit Management and Sources"
        ,	"Debt Management and Recovery"
        ,	"IFRS and IPSAS reporting"
        ,	"Reporting Accountants"
        ,	"Business Re-engineering and Restructuring"
        ,	"Mergers, Acquisitions and Disposals"
        ,	"Corporate Recovery and Bankruptcy"
        ,	"Receivership and Liquidation"

      ],
      image : 'assets/img/services/7.jpg',
      link : 'financial-advisory'
    },

    {
      name: 'Management Consulting',
      one_line : 'Management at all levels requires the right information for informed judgement.',
      short_description : 'At EOAC, we assign highly experienced Consultants with proven records in line management to adequately meet your needs',
      description : 'Management at all levels requires the right information for informed judgement. At EOAC, we assign highly experienced Consultants with proven records in line management to adequately meet your needs',
      list_title : 'We adequately meet your needs in the following areas: ',
      list : [
        "Strategy and Operation"
        ,	"Human Capital"
        ,	"Information Systems Effectiveness Review"
        ,	"Complete Management of Existing Business"
        ,	"Information Technology Advisory Services"
        ,	"Personnel Audits and Manpower Utilisation Reports"
        ,	"Project Management, Evaluation and Implementation Training"
        ,	"Expatriate Quota Approval / Returns"
        ,	"International Assignments"
        ,	"Outsourcing"


      ],
      image : 'assets/img/services/8.jpg',
      link : 'management-consulting'
    },

    {
      name: 'Entrepreneurship Development',
      one_line : 'Every organization/business desires to grow big, enjoy better result and profitability.',
      short_description : 'The economic question of how, what and when is very crucial. ',
      description : 'Every organization/business desires to grow big, enjoy better result and profitability. The economic question of how, what and when is very crucial. A good number of SMSEs have no answer, so it becomes difficult to realise their goals and aspirations. ',
      list_title : 'For the needed solution and on the services below, you need EOAC. ',
      list : [

        ,	"Small and Medium Business Finance Sourcing"
        ,	"Skills Acquisition Training, Product Design and Development"
        ,	"Profit Planning and Succession Planning"
        ,	"Process Design, Engineering and Improvement"
        ,	"Feasibility Report and Investment Appraisals"
        ,	"Enterprise Transformation, Leadership Development and Formalization of Business Management"
        ,	"Entrepreneurship Development in SMEs and MSMEs"


      ],
      image : 'assets/img/services/9.jpg',
      link : 'entrepreneurship-development'
    },

    {
      name: 'Trust Administration and Services to Charity Organizations',
      one_line : 'Today, administration of charities requires integrity, accountability and professionalism.',
      short_description : 'Donors are very keen to see their fund being utilised for the core programme or project it is meant for',
      description : '<p>\n' +
        '  Today, administration of charities requires integrity, accountability and professionalism. Donors are very keen to see:  \n' +
        '</p>' +
        '<ul>' +
        '  <li>' +
        '    ,their fund being utilised for the core programme or project it is meant for.\n' +
        '  </li>\n' +
        '  <li>\n' +
        '    ,\treliable system and controls put in place by the benefiting organization, project/fund coordinators and managers. Proper documentations and reporting enhance credence to any system.  For adequate management and trusted advisers, then, you need our services which include:\n' +
        '  </li>\n' +
        '</ul>\n' +
        '\n',
      list_title : 'For adequate management and trusted advisers, then, you need our services which include: ',
      list : [

        ,	"Accounting system required to maintain proper records"
        ,	"Tax issues and related services"
        ,	"Audit of a Charity or Trust"
        ,	"Duties and responsibilities of Trustees"
        ,	"Registration with the relevant authorities"
        ,	"General administration and management"

      ],
      image : 'assets/img/services/10.jpg',
      link : 'trust-administration'
    },

    {
      name: 'Corporate Secretariat and Legal Services',
      one_line : 'To eliminate unnecessary bureaucratic, administrative and logistical problems often encountered by many companies, we represent our clients in dealing with regulatory bodies',
      short_description : 'and government departments such as Corporate Affairs Commission (CAC), ',
      description : 'To eliminate unnecessary bureaucratic, administrative and logistical problems often encountered by many companies, we represent our clients in dealing with regulatory bodies and government departments such as Corporate Affairs Commission (CAC), Nigerian Investment and Promotion Commission (NIPC), Securities and Exchange Commission (SEC), National Pension Commission (PENCOM), Industrial Training Fund (ITF), Nigerian Social Insurance Trust Fund (NSITF) and others.',
      list_title : 'Our services here include: ',
      list : [

        ,	"Corporate Services"
        ,	"Registration of Companies, NGOs and Business Name with (CAC)"
        ,	"Filling of Statutory Returns and other Services with CAC"
        ,	"Company Secretarial"
        ,	"Immigration and advisory Services"
        ,	"New investment and Start-ups in Nigeria"
        ,	"Cross Border Transactions"
        ,	"Pension, NIPC, SEC, ITF, NSITF Advisory Services"


      ],
      image : 'assets/img/services/11.jpg',
      link : 'corporate-secretariat-and-legal'
    },


  ];

  constructor() { }
}
