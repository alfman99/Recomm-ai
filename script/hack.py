import sqlite3
def category_dishwasher(price):
    max = 1649
    return((price*6)/max)

def category_electric_stovetop(price):
    max = 3999
    return((price*6)/max)

def category_gas_stovetop(price):
    max = 4049
    return((price*6)/max)

def category_microwave(price):
    max = 619
    return((price*6)/max)

def category_radiator(price):
    max = 2599
    return((price*6)/max)

def category_oven(price):
    max = 3402
    return((price*6)/max)

def category_refrigerator(price):
    max = 6744
    return((price*6)/max)

def category_range_hood(price):
    max = 749
    return((price*6)/max)
    

def do_script(c,q):
    c.execute("INSERT INTO appliance(type, name, price, category) VALUES(?,?,?,?)", q)

con = sqlite3.connect('recomm-ai.db')

cur = con.cursor()

# Create table
try:
    cur.execute("CREATE TABLE appliance(id INTEGER PRIMARY KEY AutoIncrement, type TEXT NOT NULL, name TEXT NOT NULL, price FLOAT NOT NULL, category FLOAT NOT NULL);")
except:
    cur.execute("DROP TABLE appliance;")
    cur.execute("CREATE TABLE appliance(id INTEGER PRIMARY KEY AutoIncrement, type TEXT NOT NULL, name TEXT NOT NULL, price FLOAT NOT NULL, category FLOAT NOT NULL);")


# appliance: dishwasher
lang_list = [
    "dishwasher",#tipo
    "Samsung DW60M6050FS", #marca
    599,#price
    category_dishwasher(599),#category
]
do_script(cur, lang_list)

lang_list = [
    "dishwasher",#tipo
    "Beko DFN28430X", #marca
    479,#price
    category_dishwasher(479),#category
]
do_script(cur, lang_list)

lang_list = [
    "dishwasher",#tipo
    "Beko DFN16420X", #marca
    394,#price
    category_dishwasher(394),#category
]
do_script(cur, lang_list)

lang_list = [
    "dishwasher",#tipo
    "OK ODW 131 F", #marca
    249,#price
    category_dishwasher(249),#category
]
do_script(cur, lang_list)

lang_list = [
    "dishwasher",#tipo
    "AEG FSE73727P", #marca
    799,#price
    category_dishwasher(799),#category
]
do_script(cur, lang_list)

lang_list = [
    "dishwasher",#tipo
    "Miele G 5210 SC EDST", #marca
    1019,#price
    category_dishwasher(1019),#category
]
do_script(cur, lang_list)

lang_list = [
    "dishwasher",#tipo
    "Bosch KAD93VIFP", #marca
    1943,#price
    category_dishwasher(1943),#category
]
do_script(cur, lang_list)

lang_list = [
    "dishwasher",#tipo
    "Infiniton DIW-4510W", #marca
    349,#price
    category_dishwasher(349),#category
]
do_script(cur, lang_list)

lang_list = [
    "dishwasher",#tipo
    "AEG FFB83806PM", #marca
    990,#price
    category_dishwasher(990),#category
]
do_script(cur, lang_list)

lang_list = [
    "dishwasher",#tipo
    "Miele G 5000 SCI", #marca
    1099,#price
    category_dishwasher(1099),#category
]
do_script(cur, lang_list)

# appliance: electric_stovetop
lang_list = [
    "electric_stovetop",
    "UNIVERSALBLUE URAM1000-18",
    44.99,
    category_electric_stovetop(44.99),
]
do_script(cur, lang_list)

lang_list = [
    "electric_stovetop",
    "Haverland XTAL4B",
    386.0,
    category_electric_stovetop(386.0),
]
do_script(cur, lang_list)

lang_list = [
    "electric_stovetop",
    "Siemens ET475FYB1E",
    1779,
    category_electric_stovetop(1779),
]
do_script(cur, lang_list)

# appliance: gas_stovetop
lang_list = [
    "gas_stovetop",
    "OUTSUNNY",
    359.99, 
    category_gas_stovetop(300),
]
do_script(cur, lang_list)

lang_list = [
    "gas_stovetop",
    "OUTSUNNY",
    69.99,
    category_gas_stovetop(69.99),
]
do_script(cur, lang_list)

lang_list = [
    "gas_stovetop",
    "Orbegozo H55",
    123,
    category_gas_stovetop(123),
]
do_script(cur, lang_list)

# appliance: microwave
lang_list = [
    "microwave",
    "Cecotec ProClean 5120",
    99.99,
    category_microwave(99.99),
]
do_script(cur, lang_list)

lang_list = [
    "microwave",
    "Taurus Ready",
    66.99,
    category_microwave(66.99),
]
do_script(cur, lang_list)

lang_list = [
    "microwave",
    "Teka MLC 844",
    780,
    category_microwave(780),
]
do_script(cur, lang_list)

# appliance: oven
lang_list = [
    "oven", 
    "Balay 3HB4331X0",
    299, 
    category_oven(299),
]
do_script(cur, lang_list)

lang_list = [
    "oven",
    "BASTILIPO Pisa",
    44.95,
    category_oven(44.95),
]
do_script(cur, lang_list)

lang_list = [
    "oven",
    "Smeg A1PY-9",
    3402,  # price
    category_oven(3402),  # category
]
do_script(cur, lang_list)

# appliance: radiator
lang_list = [
    "radiator",
    "Supra Orphée 12 FR9010800B",
    2599,
    category_radiator(2599),
]
do_script(cur, lang_list)

lang_list = [
    "radiator",
    "PURLINE MUSIA",
    499.95,
    category_radiator(499.95),
]
do_script(cur, lang_list)

lang_list = [
    "radiator",
    "BASTILIPO 2765 ET-EcoFluid-4",
    195.79,
    category_radiator(195.79),
]
do_script(cur, lang_list)


# appliance: refrigerator
lang_list = [
    "refrigerator",
    "SOGO",
    64.99,
    category_refrigerator(64.99),
]
do_script(cur, lang_list)

lang_list = [
    "refrigerator",
    "LG LSR200B",
    6744,
    category_refrigerator(6744),
]
do_script(cur, lang_list)

lang_list = [
    "refrigerator",
    "Haier F+ Series 9 HFF-750CGBJ",
    3380,
    category_refrigerator(3380),
]
do_script(cur, lang_list)

# appliance: range_hood
lang_list = [
    "range_hood",
    "Siemens LZ20JXP00",
    772.50,
    category_range_hood(772.50),
]
do_script(cur, lang_list)

lang_list = [
    "range_hood",
    "SCHNEIDER SCHB98EX",
    264.90,
    category_range_hood(264.90),
]
do_script(cur, lang_list)

lang_list = [
    "range_hood",
    "SCHNEIDER SCHC6018WH",
    74.90,
    category_range_hood(74.90),
]
do_script(cur, lang_list)

# Save (commit) the changes
con.commit()

# We can also close the connection if we are done with it.
# Just be sure any changes have been committed or they will be lost.
con.close()