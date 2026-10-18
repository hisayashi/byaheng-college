const openOptionsBtn = document.getElementById("openOptions");
const optionsPanel = document.getElementById("optionsPanel");
const tagline = document.getElementById("tagline");
const bulsuSubOptions = document.getElementById("bulsuSubOptions");
const infoPanel = document.getElementById("infoPanel");
const schoolName = document.getElementById("schoolName");
const schoolInfo = document.getElementById("schoolInfo");

function showIntro() {
  optionsPanel.classList.add("hidden");
  infoPanel.classList.add("hidden");
  tagline.classList.remove("hidden");
  openOptionsBtn.textContent = "Click";
  bulsuSubOptions.classList.add("hidden");
}

function openMenu() {
  optionsPanel.classList.remove("hidden");
  infoPanel.classList.add("hidden");
  tagline.classList.add("hidden");
  bulsuSubOptions.classList.add("hidden");
  openOptionsBtn.textContent = "Exit";
}

function showQCUInfo() {
  schoolName.textContent = "QCU";
  schoolInfo.innerHTML = `
    <strong>Quezon City University - Main Campus</strong><br>
    <strong>Address:</strong> 673 Quirino Highway, San Bartolome, Novaliches, Quezon City<br><br>
    <strong>✿Free Tuition, No Miscellaneous Fee, Funded by QC LGU, Scholarships:</strong> QCYDO, UniFast, CHED, Private Partner & Corporate Grants.<br><br>
    <strong>Available Programs:</strong><br>
    <br>
    🖥 <strong>College of Computer Studies</strong><br>
    ❖ Bachelor of Science in Information Technology (BSIT)<br>
    ❖ Bachelor of Science in Computer Science (BSCS)<br>
    ❖ Bachelor of Science in Information Systems (BSIS)<br><br>
    <strong>College of Engineering</strong><br>
    ❖ Bachelor of Science in Industrial Engineering (BSIE)<br>
    ❖ Bachelor of Science in Electronics Engineering (BSECE)<br><br>
    <strong>College of Business Administration and Accountancy</strong><br>
    ❖ Bachelor of Science in Accountancy (BSA)<br>
    ❖ Bachelor of Science in Entrepreneurship (BS Entrep)<br><br>
    <strong>College of Education</strong><br>
    ❖ Bachelor of Early Childhood Education (BECEd)<br><br>
    <strong>QCUCAT Admission Timeline (Annual Cycle)</strong><br>
    <strong>Application Period:</strong> February – March<br>
    <strong>Entrance Exam (QCUCAT):</strong> April – May<br>
    <strong>Results & Interviews:</strong> June – July<br>
    <strong>Start of Academic Year:</strong> August / September<br><br>
    <strong>Accomplished QCU Student Admission Form</strong><br>
    ★ Original Report Card (Form 138 / SF9) / Transcript of Records<br>
    ★ Certificate of Good Moral Character<br>
    ★ PSA Birth Certificate<br>
    ★ Barangay Certificate of Residency / Proof of QC Residence<br>
    ★ 2x2 ID Pictures (white background with name tag and signature above the name in 2x2)
  `;
  optionsPanel.classList.add("hidden");
  tagline.classList.add("hidden");
  infoPanel.classList.remove("hidden");
  bulsuSubOptions.classList.add("hidden");
  openOptionsBtn.textContent = "Exit";
}

function showBulSU_SarmientoInfo() {
  schoolName.textContent = "BulSU - Sarmiento";
  schoolInfo.innerHTML = `
    <strong>Bulacan State University - Sarmiento Campus</strong><br>
    <strong>Address:</strong> University Heights, Brgy. Kaypian, City of San Jose del Monte, Bulacan<br><br>
    <strong>Available Programs:</strong><br><br>
    <strong>Computing & Technology</strong><br>
    ❖ Bachelor of Science in Information Technology (BSIT)<br>
    ❖ Bachelor of Science in Data Science and Analytics (Major in Geospatial and Big Data)<br>
    ❖ Bachelor in Industrial Technology (BIT – Major in Computer Technology)<br>
    ❖ Bachelor of Science in Computer Engineering (BSCpE)<br><br>
    <strong>Business & Hospitality</strong><br>
    ❖ Bachelor of Science in Business Administration (BSBA – Financial Management)<br>
    ❖ Bachelor of Science in Entrepreneurship (BS Entrep)<br>
    ❖ Bachelor of Science in Hospitality Management (BSHM)<br>
    ❖ Bachelor of Science in Tourism Management (BSTM)<br><br>
    <strong>Education</strong><br>
    ❖ Bachelor of Elementary Education (BEEd)<br>
    ❖ Bachelor of Secondary Education (BSEd – Major in English)<br>
    ❖ Bachelor of Physical Education (BPEd)<br><br>
    <strong>Social Sciences & Others</strong><br>
    ❖ Bachelor of Science in Psychology (BS Psych)<br>
    ❖ Bachelor of Public Administration (BPA)<br>
    ❖ Bachelor of Science in Social Work (BSSW)<br>
    ❖ Bachelor of Arts in Development Studies (AB DevStud)<br><br>
    <strong>ATBulSU Admission Timeline (Annual Cycle)</strong><br>
    <strong>Application Period (Online Registration):</strong> October – December<br>
    <strong>Entrance Examination (ATBulSU):</strong> January – March<br>
    <strong>Release of Results & Screening/Interviews:</strong> May – June<br>
    <strong>Pre-Enrollment & Submission of Requirements:</strong> June – July<br>
    <strong>Start of Academic Year:</strong> August<br><br>
    <strong>Admission Requirements</strong><br>
    ★ Form 138 / Report Card (Certified True Copy of Grade 11 SF9)<br>
    ★ Certificate of Good Moral Character<br>
    ★ PSA Birth Certificate<br>
    ★ Barangay Certificate / Proof of Residency<br>
    ★ 2x2 ID Pictures (white background)
  `;
  optionsPanel.classList.add("hidden");
  tagline.classList.add("hidden");
  infoPanel.classList.remove("hidden");
  bulsuSubOptions.classList.add("hidden");
  openOptionsBtn.textContent = "Exit";
}

function showBulSU_MalolosInfo() {
  schoolName.textContent = "BulSU - Malolos";
  schoolInfo.innerHTML = `
    <strong>BulSU Main Campus</strong><br>
    <strong>Address:</strong> MacArthur Highway, Brgy. Guinhawa, City of Malolos, Bulacan 3000<br><br>
    <strong>Computing & Information Technology</strong><br>
    ❖ Bachelor of Science in Information Technology (BSIT)<br>
    ❖ Bachelor of Science in Information Systems (BSIS)<br>
    ❖ Bachelor of Library and Information Science (BLIS)<br><br>
    <strong>Engineering</strong><br>
    ❖ Bachelor of Science in Civil Engineering (BSCE)<br>
    ❖ Bachelor of Science in Computer Engineering (BSCpE)<br>
    ❖ Bachelor of Science in Electrical Engineering (BSEE)<br>
    ❖ Bachelor of Science in Electronics Engineering (BCECE)<br>
    ❖ Bachelor of Science in Industrial Engineering (BSIE)<br>
    ❖ Bachelor of Science in Manufacturing Engineering (BSMfgE)<br>
    ❖ Bachelor of Science in Mechanical Engineering (BSME)<br>
    ❖ Bachelor of Science in Mechatronics Engineering (BSEMecE)<br><br>
    <strong>Architecture, Fine Arts & Design</strong><br>
    ❖ Bachelor of Science in Architecture (BS Arch)<br>
    ❖ Bachelor of Landscape Architecture (BLA)<br>
    ❖ Bachelor of Fine Arts (Major in Visual Communication)<br><br>
    <strong>Business, Accountancy & Management</strong><br>
    ❖ Bachelor of Science in Accountancy (BSA)<br>
    ❖ Bachelor of Science in Accounting Information System (BSAIS)<br>
    ❖ Bachelor of Science in Entrepreneurship (BS Entrep)<br>
    ❖ Bachelor of Science in Business Administration (Majors: Financial Management, Marketing Management, Business Economics)<br><br>
    <strong>Hospitality & Tourism Management</strong><br>
    ❖ Bachelor of Science in Hospitality Management (BSHM)<br>
    ❖ Bachelor of Science in Tourism Management (BSTM)<br><br>
    <strong>Health & Natural Sciences</strong><br>
    ❖ Bachelor of Science in Nursing (BSN)<br>
    ❖ Bachelor of Science in Medical Technology / Medical Laboratory Science (BSMT)<br>
    ❖ Bachelor of Science in Biology (BS Bio)<br>
    ❖ Bachelor of Science in Environmental Science (BS ES)<br>
    ❖ Bachelor of Science in Food Technology (BS FT)<br>
    ❖ Bachelor of Science in Mathematics (Specializations: Applied Statistics, Business Applications, Computer Science)<br><br>
    <strong>Teacher Education</strong><br>
    ❖ Bachelor of Elementary Education (BEEd)<br>
    ❖ Bachelor of Early Childhood Education (BECEd)<br>
    ❖ Bachelor of Special Needs Education (BSNEd)<br>
    ❖ Bachelor of Secondary Education (Majors: English, Filipino, Mathematics, Sciences, Social Studies, Values Education)<br>
    ❖ Bachelor of Technology and Livelihood Education (Majors: Home Economics, ICT, Industrial Arts)<br>
    ❖ Bachelor of Physical Education (BPEd)<br><br>
    <strong>Humanities, Arts & Communication</strong><br>
    ❖ Bachelor of Arts in Journalism (BA Jour)<br>
    ❖ Bachelor of Arts in Broadcasting (BA Broad)<br>
    ❖ Bachelor of Arts in English Language Studies (BA ELS)<br>
    ❖ Batsilyer ng Sining sa Malikhaing Pagsulat (BA Creative Writing)<br>
    ❖ Bachelor of Performing Arts (Theater Track)<br><br>
    <strong>Social Sciences, Law & Public Administration</strong><br>
    ❖ Bachelor of Science in Psychology (BS Psych)<br>
    ❖ Bachelor of Science in Social Work (BSSW)<br>
    ❖ Bachelor of Public Administration (BPA)<br>
    ❖ Bachelor of Arts in Legal Management (BALM)<br>
    ❖ Bachelor of Science in Criminology (BS Crim)<br><br>
    <strong>Industrial Technology</strong><br>
    ❖ Bachelor of Industrial Technology (Specializations: Automotive, Computer, Drafting, Electrical, Electronics, Mechanical, Mechatronics, Welding)<br><br>
    <strong>Sports Science</strong><br>
    ❖ Bachelor of Science in Exercise and Sports Sciences (Fitness & Sports Coaching / Management)<br><br>
    <strong>ATBulSU Admission Timeline (Annual Cycle)</strong><br>
    <strong>Application Period (Online Registration):</strong> October – December<br>
    <strong>Entrance Examination (ATBulSU):</strong> January – March<br>
    <strong>Release of Results & Screening/Interviews:</strong> May – June<br>
    <strong>Pre-Enrollment & Submission of Requirements:</strong> June – July<br>
    <strong>Start of Academic Year:</strong> August<br><br>
    <strong>Admission Requirements</strong><br>
    <strong>Basic Requirements</strong><br>
    ★ Form 138 / SF9 (Certified True Copy of Grade 11 Report Card)<br>
    ★ Certificate of Good Moral Character<br>
    ★ PSA Birth Certificate<br>
    ★ Certified True Copy of Barangay Certificate<br>
    ★ 2x2 ID Pictures (white background)<br><br>
    <strong>Special / Additional Requirements (If Applicable)</strong><br>
    ★ ALS Accreditation & Equivalency Assessment Certificate (for ALS graduates)<br>
    ★ 4Ps Membership Certification / Barangay Certification (for 4Ps beneficiaries)<br>
    ★ NCIP / Barangay Membership Certificate (for Indigenous People)<br>
    ★ Valid Solo Parent ID (for children of Solo Parents)<br>
    ★ Valid PWD ID or Certificate (for PWD applicants)<br>
    ★ Certification from School/Community Head (for Athletes/Artists)<br>
    ★ Certificate of Class Ranking (for Board Course applicants)
  `;
  optionsPanel.classList.add("hidden");
  tagline.classList.add("hidden");
  infoPanel.classList.remove("hidden");
  bulsuSubOptions.classList.add("hidden");
  openOptionsBtn.textContent = "Exit";
}

function showFEUInfo() {
  schoolName.textContent = "FEU";
  schoolInfo.innerHTML = `
    <strong>Far Eastern University – Manila (FEU Main Campus)</strong><br>
    <strong>Address:</strong> Nicanor Reyes Street, Sampaloc, Manila, 1008 Metro Manila<br><br>
    <strong>Available Programs:</strong><br><br>
    <strong>Institute of Accounts, Business, and Finance (IABF)</strong><br>
    ❖ Bachelor of Science in Accountancy (BSA)<br>
    ❖ Bachelor of Science in Internal Auditing (BSIA)<br>
    ❖ Bachelor of Science in Accounting Information System (BSAIS)<br>
    ❖ Bachelor of Science in Business Administration (Majors: Financial Management, Marketing Management, Business Analytics, Operations Management)<br><br>
    <strong>Institute of Architecture and Fine Arts (IARFA)</strong><br>
    ❖ Bachelor of Science in Architecture (BS Arch)<br>
    ❖ Bachelor of Fine Arts (Majors: Visual Communication, Painting)<br><br>
    <strong>Institute of Arts and Sciences (IAS)</strong><br>
    ❖ Bachelor of Science in Applied Mathematics<br>
    ❖ Bachelor of Science in Biology (Tracks: Medical Biology, Systematics and Ecology)<br>
    ❖ Bachelor of Science in Psychology (BS Psych)<br>
    ❖ Bachelor of Arts in Communication (BA Comm)<br>
    ❖ Bachelor of Arts in International Studies (BA IS)<br>
    ❖ Bachelor of Arts in Political Science (BA PS)<br>
    ❖ Bachelor of Science in Environmental Science (BS ES)<br><br>
    <strong>Institute of Education (IE)</strong><br>
    ❖ Bachelor of Elementary Education (BEEd)<br>
    ❖ Bachelor of Secondary Education (Majors: English, Mathematics, Science)<br>
    ❖ Bachelor of Special Needs Education (BSNEd)<br>
    ❖ Bachelor of Physical Education (BPEd)<br><br>
    <strong>Institute of Health Sciences and Nursing (IHSN)</strong><br>
    ❖ Bachelor of Science in Nursing (BSN)<br>
    ❖ Bachelor of Science in Medical Technology (BSMT)<br><br>
    <strong>Institute of Tourism and Hotel Management (ITHM)</strong><br>
    ❖ Bachelor of Science in Tourism Management (BSTM)<br>
    ❖ Bachelor of Science in Hospitality Management (BSHM)<br><br>
    <strong>FEU Institute of Technology (FEU Tech / Manila Campus Associated)</strong><br>
    ❖ Bachelor of Science in Computer Science (BSCS)<br>
    ❖ Bachelor of Science in Information Technology (BSIT)<br>
    ❖ Bachelor of Science in Civil Engineering (BSCE)<br>
    ❖ Bachelor of Science in Computer Engineering (BSCpE)<br>
    ❖ Bachelor of Science in Electrical Engineering (BSEE)<br>
    ❖ Bachelor of Science in Electronics Engineering (BCECE)<br>
    ❖ Bachelor of Science in Mechanical Engineering (BSME)<br><br>
    <strong>FEU College Admission Test (FEU-CAT) Timeline (Annual Cycle)</strong><br>
    <strong>Application Period (Online Registration):</strong> October – May<br>
    <strong>Entrance Examination (FEU-CAT):</strong> November – June<br>
    <strong>Release of Examination Results:</strong> 2 weeks after test schedule<br>
    <strong>Enrollment & Requirement Submission:</strong> April – July<br>
    <strong>Start of Academic Year:</strong> August<br><br>
    <strong>Admission Requirements</strong><br>
    <strong>Basic Requirements</strong><br>
    ★ Grade 12 Report Card (Form 138 / SF9)<br>
    ★ Certificate of Good Moral Character<br>
    ★ PSA Birth Certificate<br>
    ★ Certificate of Graduation or Copy of Senior High School Diploma<br>
    ★ FEU-CAT Official Test Result / Clearance<br><br>
    <strong>Special / Additional Requirements (If Applicable)</strong><br>
    ★ ALS Accreditation & Equivalency Certificate of Passing and Rating (for ALS passers)<br>
    ★ PEPT Passing Certificate & Rating Certificate (for PEPT passers)<br>
    ★ Top 10 Batch Certification from Grade 11 Principal (for FEU Scholarship applicants)<br>
    ★ Certificate of Transfer Credentials / Honorable Dismissal (for Transferees)<br>
    ★ Passport photocopy & INTELAC / TOEFL / IELTS Result (for Foreign Students)
  `;
  optionsPanel.classList.add("hidden");
  tagline.classList.add("hidden");
  infoPanel.classList.remove("hidden");
  bulsuSubOptions.classList.add("hidden");
  openOptionsBtn.textContent = "Exit";
}

function showPUPInfo() {
  schoolName.textContent = "PUP";
  schoolInfo.innerHTML = `
    <strong>Polytechnic University of the Philippines – Main Campus (Sta. Mesa, Manila)</strong><br>
    <strong>Address:</strong> Anonas Street, Sta. Mesa, Manila, 1016 Metro Manila<br><br>
    <strong>Available Programs:</strong><br><br>
    <strong>College of Accountancy and Finance (CAF)</strong><br>
    ❖ Bachelor of Science in Accountancy (BSA)<br>
    ❖ Bachelor of Science in Management Accounting (BSMA)<br>
    ❖ Bachelor of Science in Business Administration (Major in Financial Management)<br><br>
    <strong>College of Architecture, Design and the Built Environment (CADBE)</strong><br>
    ❖ Bachelor of Science in Architecture (BS Arch)<br>
    ❖ Bachelor of Science in Interior Design (BSID)<br>
    ❖ Bachelor of Science in Environmental Planning (BSEP)<br><br>
    <strong>College of Arts and Letters (CAL)</strong><br>
    ❖ Bachelor of Arts in English Language Studies (AB ELS)<br>
    ❖ Bachelor of Arts in Filipinology (ABF)<br>
    ❖ Bachelor of Arts in Literary and Cultural Studies (ABLCS)<br>
    ❖ Bachelor of Arts in Philosophy (AB Philo)<br>
    ❖ Bachelor of Performing Arts (Major in Theater Arts)<br><br>
    <strong>College of Business Administration (CBA)</strong><br>
    ❖ Bachelor of Science in Business Administration (Majors: Human Resource Management, Marketing Management)<br>
    ❖ Bachelor of Science in Entrepreneurship (BS Entrep)<br>
    ❖ Bachelor of Science in Office Administration (BSOA)<br><br>
    <strong>College of Communication (COC)</strong><br>
    ❖ Bachelor of Arts in Broadcasting (BABR)<br>
    ❖ Bachelor of Arts in Communication Research (BACR)<br>
    ❖ Bachelor of Arts in Journalism (BAJ)<br>
    ❖ Bachelor of Science in Advertising and Public Relations (BSAPR)<br><br>
    <strong>College of Computer and Information Sciences (CCIS)</strong><br>
    ❖ Bachelor of Science in Computer Science (BSCS)<br>
    ❖ Bachelor of Science in Information Technology (BSIT)<br><br>
    <strong>College of Education (COED)</strong><br>
    ❖ Bachelor of Elementary Education (BEEd)<br>
    ❖ Bachelor of Secondary Education (Majors: English, Mathematics, Science, Social Studies, Filipino)<br>
    ❖ Bachelor of Early Childhood Education (BECEd)<br>
    ❖ Bachelor of Technical-Livelihood Education (Majors: Home Economics, Industrial Arts, Information and Communication Technology)<br><br>
    <strong>College of Engineering (CE)</strong><br>
    ❖ Bachelor of Science in Civil Engineering (BSCE)<br>
    ❖ Bachelor of Science in Computer Engineering (BSCpE)<br>
    ❖ Bachelor of Science in Electrical Engineering (BSEE)<br>
    ❖ Bachelor of Science in Electronics Engineering (BSECE)<br>
    ❖ Bachelor of Science in Industrial Engineering (BSIE)<br>
    ❖ Bachelor of Science in Mechanical Engineering (BSME)<br>
    ❖ Bachelor of Science in Railway Engineering (BSRE)<br><br>
    <strong>College of Human Kinetics (CHK)</strong><br>
    ❖ Bachelor of Physical Education (BPEd)<br>
    ❖ Bachelor of Science in Exercise and Sports Sciences<br><br>
    <strong>College of Political Science and Public Administration (CPSPA)</strong><br>
    ❖ Bachelor of Arts in Political Science (BAPS)<br>
    ❖ Bachelor of Arts in International Studies (BAIS)<br>
    ❖ Bachelor of Public Administration (BPA)<br><br>
    <strong>College of Social Sciences and Development (CSSD)</strong><br>
    ❖ Bachelor of Arts in History (BAH)<br>
    ❖ Bachelor of Science in Economics (BSEcon)<br>
    ❖ Bachelor of Science in Psychology (BS Psych)<br>
    ❖ Bachelor of Science in Sociology (BS Soc)<br><br>
    <strong>College of Science (CS)</strong><br>
    ❖ Bachelor of Science in Applied Mathematics (BSAM)<br>
    ❖ Bachelor of Science in Biology (BS Bio)<br>
    ❖ Bachelor of Science in Chemistry (BS Chem)<br>
    ❖ Bachelor of Science in Food Technology (BSFT)<br>
    ❖ Bachelor of Science in Mathematics (BS Math)<br>
    ❖ Bachelor of Science in Nutrition and Dietetics (BSND)<br>
    ❖ Bachelor of Science in Physics (BS Phys)<br>
    ❖ Bachelor of Science in Statistics (BS Stat)<br><br>
    <strong>College of Tourism, Hospitality and Transportation Management (CTHTM)</strong><br>
    ❖ Bachelor of Science in Hospitality Management (BSHM)<br>
    ❖ Bachelor of Science in Tourism Management (BSTM)<br>
    ❖ Bachelor of Science in Transportation Management (BSTRM)<br><br>
    <strong>PUPCET Admission Timeline (Annual Cycle)</strong><br>
    <strong>Application Period (PUP iApply Online Registration):</strong> November – December<br>
    <strong>Entrance Examination (PUPCET):</strong> January – March<br>
    <strong>Release of Examination Results:</strong> April – May<br>
    <strong>Confirmation & Submission of Requirements:</strong> June – July<br>
    <strong>Start of Academic Year:</strong> August<br><br>
    <strong>Admission Requirements</strong><br>
    <strong>Basic Requirements</strong><br>
    ★ Grade 10, 11, and Grade 12 (1st Sem) Report Card (Form 138 / SF9)<br>
    ★ Certificate of Good Moral Character<br>
    ★ PSA Birth Certificate<br>
    ★ PUPCET e-Permit & Official Test Result<br>
    ★ Medical Clearance from PUP Medical Clinic<br>
    ★ Certified True Copy of Barangay Certificate<br><br>
    <strong>Special / Additional Requirements (If Applicable)</strong><br>
    ★ ALS Accreditation & Equivalency Certificate of Passing<br>
    ★ PEPT Passing Certificate & Rating Certificate<br>
    ★ Certificate of Transfer Credentials / Honorable Dismissal (for Transferees)
  `;
  optionsPanel.classList.add("hidden");
  tagline.classList.add("hidden");
  infoPanel.classList.remove("hidden");
  bulsuSubOptions.classList.add("hidden");
  openOptionsBtn.textContent = "Exit";
}

function showUPInfo() {
  schoolName.textContent = "UP";
  schoolInfo.innerHTML = `
    <strong>University of the Philippines – Diliman (Main Campus)</strong><br>
    <strong>Address:</strong> Roxas Avenue, Diliman, Quezon City, 1101 Metro Manila<br><br>
    <strong>Available Programs</strong><br><br>
    <strong>College of Architecture (CA)</strong><br>
    ❖ Bachelor of Science in Architecture (BS Arch)<br>
    ❖ Bachelor of Landscape Architecture (BLA)<br><br>
    <strong>College of Arts and Letters (CAL)</strong><br>
    ❖ Bachelor of Arts in Art Studies (Majors: Art History, Art Interdisciplinary, Curatorial Studies)<br>
    ❖ Bachelor of Arts in Comparative Literature<br>
    ❖ Bachelor of Arts in Creative Writing<br>
    ❖ Bachelor of Arts in European Languages (Majors: French, German, Italian, Spanish)<br>
    ❖ Bachelor of Arts in Filipino at Panitikan ng Pilipinas<br>
    ❖ Bachelor of Arts in English Studies (Majors: Language, Literature)<br>
    ❖ Bachelor of Arts in Malikhaing Pagsulat sa Filipino<br>
    ❖ Bachelor of Arts in Speech Communication<br>
    ❖ Bachelor of Arts in Theatre Arts<br><br>
    <strong>College of Business Administration (CBA / Virata School of Business)</strong><br>
    ❖ Bachelor of Science in Business Administration (BSBA)<br>
    ❖ Bachelor of Science in Business Administration and Accountancy (BSBAA)<br><br>
    <strong>College of Education (Educ)</strong><br>
    ❖ Bachelor of Elementary Education (BEEd)<br>
    ❖ Bachelor of Secondary Education (BSEd)<br><br>
    <strong>College of Engineering (COE)</strong><br>
    ❖ Bachelor of Science in Chemical Engineering (BS ChE)<br>
    ❖ Bachelor of Science in Civil Engineering (BS CE)<br>
    ❖ Bachelor of Science in Computer Engineering (BS CpE)<br>
    ❖ Bachelor of Science in Computer Science (BS CS)<br>
    ❖ Bachelor of Science in Electrical Engineering (BS EE)<br>
    ❖ Bachelor of Science in Electronics Engineering (BS ECE)<br>
    ❖ Bachelor of Science in Geodetic Engineering (BS GE)<br>
    ❖ Bachelor of Science in Industrial Engineering (BS IE)<br>
    ❖ Bachelor of Science in Materials Engineering (BS MatE)<br>
    ❖ Bachelor of Science in Mechanical Engineering (BS ME)<br>
    ❖ Bachelor of Science in Mining Engineering (BS EM)<br>
    ❖ Bachelor of Science in Metallurgical Engineering (BS MetE)<br><br>
    <strong>College of Fine Arts (CFA)</strong><br>
    ❖ Bachelor of Fine Arts (Majors: Art History, Industrial Design, Painting, Sculpture, Visual Communication)<br><br>
    <strong>College of Human Kinetics (CHK)</strong><br>
    ❖ Bachelor of Physical Education (BPE)<br>
    ❖ Bachelor of Science in Sports Science (BSSS)<br><br>
    <strong>College of Home Economics (CHE)</strong><br>
    ❖ Bachelor of Science in Clothing Technology (BS CT)<br>
    ❖ Bachelor of Science in Community Nutrition (BS CN)<br>
    ❖ Bachelor of Science in Family Life and Child Development (BS FLCD)<br>
    ❖ Bachelor of Science in Food Technology (BS FT)<br>
    ❖ Bachelor of Science in Hotel, Restaurant and Institution Management (BS HRIM)<br>
    ❖ Bachelor of Science in Interior Design (BS ID)<br><br>
    <strong>College of Mass Communication (CMC)</strong><br>
    ❖ Bachelor of Arts in Broadcast Media Arts and Studies (BABMAS)<br>
    ❖ Bachelor of Arts in Communication Research (BACR)<br>
    ❖ Bachelor of Arts in Film (BA Film)<br>
    ❖ Bachelor of Arts in Journalism (BA Jour)<br><br>
    <strong>College of Music (Music)</strong><br>
    ❖ Bachelor of Music (Majors: Composition, Choral Conducting, Instrumental, Musicology, Voice)<br><br>
    <strong>College of Science (CS)</strong><br>
    ❖ Bachelor of Science in Applied Physics (BS AP)<br>
    ❖ Bachelor of Science in Biology (BS Bio)<br>
    ❖ Bachelor of Science in Chemistry (BS Chem)<br>
    ❖ Bachelor of Science in Geology (BS Geol)<br>
    ❖ Bachelor of Science in Mathematics (BS Math)<br>
    ❖ Bachelor of Science in Molecular Biology and Biotechnology (BS MBB)<br>
    ❖ Bachelor of Science in Physics (BS Phys)<br><br>
    <strong>College of Social Sciences and Philosophy (CSSP)</strong><br>
    ❖ Bachelor of Arts in Anthropology (BA Anthro)<br>
    ❖ Bachelor of Arts in History (BA Kasaysayan)<br>
    ❖ Bachelor of Arts in Linguistics (BA Ling)<br>
    ❖ Bachelor of Arts in Philosophy (BA Philo)<br>
    ❖ Bachelor of Arts in Political Science (BA PolSci)<br>
    ❖ Bachelor of Arts in Psychology (BA Psych)<br>
    ❖ Bachelor of Science in Psychology (BS Psych)<br>
    ❖ Bachelor of Arts in Sociology (BA Socio)<br><br>
    <strong>College of Social Work and Community Development (CSWCD)</strong><br>
    ❖ Bachelor of Science in Community Development (BS CD)<br>
    ❖ Bachelor of Science in Social Work (BS SW)<br><br>
    <strong>School of Economics (SE)</strong><br>
    ❖ Bachelor of Science in Economics (BS Econ)<br>
    ❖ Bachelor of Science in Business Economics (BS BE)<br><br>
    <strong>School of Library and Information Studies (SLIS)</strong><br>
    ❖ Bachelor of Library and Information Science (BLIS)<br><br>
    <strong>School of Statistics (STAT)</strong><br>
    ❖ Bachelor of Science in Statistics (BS Stat)<br><br>
    <strong>National College of Public Administration and Governance (NCPAG)</strong><br>
    ❖ Bachelor of Public Administration (BPA)<br><br>
    <strong>UPCAT Admission Timeline (Annual Cycle)</strong><br>
    <strong>Application Period (UPCAT Online Portal):</strong> March – May<br>
    <strong>Entrance Examination (UPCAT):</strong> August<br>
    <strong>Release of Examination Results:</strong> April – May (Following Year)<br>
    <strong>Confirmation of Enrollment:</strong> May – June<br>
    <strong>Start of Academic Year:</strong> August<br><br>
    <strong>Admission Requirements</strong><br>
    <strong>Basic Requirements</strong><br>
    ★ Form 137 / SF10 (High School Permanent Record with Grades from Grades 9, 10, and 11)<br>
    ★ Certificate of Good Moral Character<br>
    ★ PSA Birth Certificate<br>
    ★ UPCAT Notice of Admission / Confirmation Slip<br>
    ★ Medical and Dental Clearance from UP Health Service<br>
    ★ ID Pictures (2x2 with Name Tag)<br><br>
    <strong>Special / Additional Requirements (If Applicable)</strong><br>
    ★ Talent Determination Test (TDT) / Audition Result (for Fine Arts, Music, and Theater Arts applicants)<br>
    ★ Physical Fitness Test (PFT) Result (for Sports Science / Physical Education applicants)<br>
    ★ ALS Accreditation & Equivalency Certificate of Passing (for ALS graduates)<br>
    ★ PEPT Passing Certificate & Rating Certificate (for PEPT takers)<br>
    ★ Official Transcript of Records & Permit to Transfer / Honorable Dismissal (for Transferees)
  `;
  optionsPanel.classList.add("hidden");
  tagline.classList.add("hidden");
  infoPanel.classList.remove("hidden");
  bulsuSubOptions.classList.add("hidden");
  openOptionsBtn.textContent = "Exit";
}

function showCSJDMCCInfo() {
  schoolName.textContent = "CCSJDM";
  schoolInfo.innerHTML = `
    <strong>City College of San Jose del Monte (CCSJDM)</strong><br>
    <strong>Address:</strong> Brgy. Minuyan Proper, City of San Jose del Monte, Bulacan<br><br>
    <strong>Available Programs</strong><br><br>
    <strong>School of Computing & Technology</strong><br>
    ❖ Bachelor of Science in Entertainment and Multimedia Computing (BSEMC)<br>
    ❖ Bachelor of Science in Information Technology (BSIT)<br><br>
    <strong>School of Business & Accountancy</strong><br>
    ❖ Bachelor of Science in Accountancy (BSA)<br>
    ❖ Bachelor of Science in Business Administration (Majors: Marketing Management, Financial Management)<br>
    ❖ Bachelor of Science in Entrepreneurship (BS Entrep)<br><br>
    <strong>School of Education, Arts, and Sciences</strong><br>
    ❖ Bachelor of Early Childhood Education (BECEd)<br>
    ❖ Bachelor of Secondary Education (Majors: English, Mathematics, Science)<br>
    ❖ Bachelor of Science in Psychology (BS Psych)<br>
    ❖ Bachelor of Science in Social Work (BSSW)<br><br>
    <strong>School of Criminology</strong><br>
    ❖ Bachelor of Science in Criminology (BS Crim)<br><br>
    <strong>School of Public Administration</strong><br>
    ❖ Bachelor of Public Administration (BPA)<br><br>
    <strong>CCSJDM Admission Timeline (Annual Cycle)</strong><br>
    <strong>Application Period (Online Application):</strong> January – March<br>
    <strong>Entrance Examination:</strong> April – May<br>
    <strong>Release of Examination Results & Interview:</strong> June<br>
    <strong>Confirmation & Submission of Requirements:</strong> July<br>
    <strong>Start of Academic Year:</strong> August<br><br>
    <strong>Admission Requirements</strong><br>
    <strong>Basic Requirements</strong><br>
    ★ Grade 12 Report Card (Form 138 / SF9)<br>
    ★ Certificate of Good Moral Character<br>
    ★ PSA Birth Certificate<br>
    ★ Certified True Copy of Barangay Certificate / Proof of Residency (San Jose del Monte resident priority)<br>
    ★ 2x2 or Passport-sized ID Pictures (white background)<br>
    ★ Certificate of Medical Fitness<br><br>
    <strong>Special / Additional Requirements (If Applicable)</strong><br>
    ★ ALS Accreditation & Equivalency Rating Certificate (for ALS graduates)<br>
    ★ Form 137 / Official Transcript of Records & Honorable Dismissal (for Transferees)<br>
    ★ Voter's ID or Voter's Certificate of Parent/Applicant (for proof of residency)
  `;
  optionsPanel.classList.add("hidden");
  tagline.classList.add("hidden");
  infoPanel.classList.remove("hidden");
  bulsuSubOptions.classList.add("hidden");
  openOptionsBtn.textContent = "Exit";
}

openOptionsBtn.addEventListener("click", () => {
  if (!infoPanel.classList.contains("hidden")) {
    openMenu();
    return;
  }

  if (optionsPanel.classList.contains("hidden")) {
    openMenu();
  } else {
    showIntro();
  }
});

document.addEventListener("click", (event) => {
  const button = event.target.closest(".school-btn");

  if (!button) return;

  const school = button.dataset.school;

  if (school === "BulSU") {
    bulsuSubOptions.classList.toggle("hidden");
    return;
  }

  if (school === "BulSU-Sarmiento") {
    showBulSU_SarmientoInfo();
    return;
  }

  if (school === "BulSU-Malolos") {
    showBulSU_MalolosInfo();
    return;
  }

  if (school === "QCU") {
    showQCUInfo();
    return;
  }

  if (school === "FEU") {
    showFEUInfo();
    return;
  }

  if (school === "PUP") {
    showPUPInfo();
    return;
  }

  if (school === "UP") {
    showUPInfo();
    return;
  }

  if (school === "CCSJDM") {
    showCSJDMCCInfo();
    return;
  }
});
