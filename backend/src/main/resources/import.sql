-- import.sql

-- CATEGORY_TYPE
insert into CATEGORY_TYPE (ID, NAME) values (1, 'majors');
insert into CATEGORY_TYPE (ID, NAME) values (2, 'industry');
insert into CATEGORY_TYPE (ID, NAME) values (3, 'company size');


-- CATEGORY
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (1, 'Micro-enterprises', 3);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (2, 'Small enterprises', 3);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (3, 'Medium-sized enterprises', 3);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (4, 'Large enterprises', 3);

insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (5, 'Aerospace and Defense', 2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (6, 'Automotive', 2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (7, 'Aviation', 2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (8, 'Banking, financial services and insurance (BFSI)',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (9, 'E-commerce',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (10, 'Educational Services',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (11, 'Energy',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (12, 'Entertainment & Media',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (13, 'Food & Agricultural industries',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (14, 'Healthcare & Social Assistance',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (15, 'IT & Telecom',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (16, 'Legal',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (17, 'Manufacturing',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (18, 'Non-Profit',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (19, 'Pharmaceuticals and Life sciences',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (20, 'Public Services',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (21, 'Real Estate & Leasing',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (22, 'Retail & FMCG',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (23, 'Transportation & Logistics',2);

insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (24, 'Business', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (25, 'Health Professions', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (26, 'Social Sciences & History', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (27, 'Engineering', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (28, 'Biological & Biomedical Sciences', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (29, 'Psychology', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (30, 'Communication & Journalism', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (31, 'Visual & Performing Arts', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (32, 'Computer & Information Sciences', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (33, 'Education', 1);

---- PROFESSION
insert into PROFESSION (ID, NAME) values (1, 'Quantitative Analyst');
insert into PROFESSION (ID, NAME) values (2, 'Financial Analyst');
insert into PROFESSION (ID, NAME) values (3, 'Software Engineer');
insert into PROFESSION (ID, NAME) values (4, 'Compliance Officer');
insert into PROFESSION (ID, NAME) values (5, 'Project Manager');
insert into PROFESSION (ID, NAME) values (6, 'Nurse');
insert into PROFESSION (ID, NAME) values (7, 'Marketing Manager');
insert into PROFESSION (ID, NAME) values (8, 'Growth Manager');
insert into PROFESSION (ID, NAME) values (9, 'Talent Acquisition');
insert into PROFESSION (ID, NAME) values (10, 'Corporate Lawyer');
insert into PROFESSION (ID, NAME) values (11, 'Business Development Manager');
insert into PROFESSION (ID, NAME) values (12, 'Quality Assurance');
insert into PROFESSION (ID, NAME) values (13, 'Flight Attendant');

---- VIDEO
--- Quantitative Analyst -1 / Finance - 8
insert into VIDEO (ID, VIDEO_URL, NAME) values (1, 'https://youtu.be/Qd2Kh80ZK6k', 'An Interview With A Quant From Two...');
insert into VIDEO (ID, VIDEO_URL, NAME) values (2, 'https://youtu.be/J9nV8U8gLec', 'Quantitative Researcher Interview...');
insert into VIDEO (ID, VIDEO_URL, NAME) values (3, 'https://youtu.be/VLPRxRe42kM', 'A Career As A Quant...');
--- Financial Analyst -2 Finance - 8
insert into VIDEO (ID, VIDEO_URL, NAME) values (4, 'https://youtu.be/QcCWRXzrnRk', 'A Day In The Life Of Financial Analyst...');
insert into VIDEO (ID, VIDEO_URL, NAME) values (5, 'https://youtu.be/OmPkgkoKniA', 'A Day In The Life Of Financial Analyst...');
-- Software Engineer -3 / IT - 15
insert into VIDEO (ID, VIDEO_URL, NAME) values (6, 'https://youtu.be/9qIRJZnoeWE', 'A Productive Day In The Life...');
insert into VIDEO (ID, VIDEO_URL, NAME) values (7, 'https://youtu.be/LGDughLj1Oo', 'A Actual DAY In The Life...');
insert into VIDEO (ID, VIDEO_URL, NAME) values (8, 'https://youtu.be/1LSXEC0Clow', 'A Day In The Life Of Software Developer ...');
--- Compliance Officer
insert into VIDEO (ID, VIDEO_URL, NAME) values (9, 'https://youtu.be/94O725eWuXs', 'Compilance In An Investment Bank...');
insert into VIDEO (ID, VIDEO_URL, NAME) values (10, 'https://youtu.be/akloeARw-Xs', 'Sunita Mansigani. Compilance Officer...');
--- Project Manager
insert into VIDEO (ID, VIDEO_URL, NAME) values (11, 'https://youtu.be/AzQ3Xso7sLA', 'A Day In The Life Of Project Manager...');


---- VIDEO_CATEGORY
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (1, 8);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (2, 8);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (3, 8);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (4, 8);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (5, 8);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (6, 15);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (7, 15);

insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (11, 15);