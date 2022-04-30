import sqlite3
'''
Scores (Gamas)-->

Disrepair (1.0)
Poor (2.0)
Average (3.0)
Good (4.0)
Excellent (5.0)
Luxury (6.0)

'''

def category_dishwasher(price):
    if price <= 249 :
        return 1.0
    elif price > 249 and price <= 482 :
        return 2.0
    elif price > 482 and price <= 715 :
        return 3.0
    elif price > 715 and price <= 948 :
        return 4.0
    elif price > 948 and price <= 1181 :
        return 5.0
    elif price > 1181 :
        return 6.0

def category_electric_stovetop(price):
    if price <= 18 :
        return 1.0
    elif price > 18 and price <= 78 :
        return 2.0
    elif price > 78 and price <= 97 :
        return 3.0
    elif price > 97 and price <= 158 :
        return 4.0
    elif price > 158 and price <= 219 :
        return 5.0
    elif price > 219 and price <= 386 :
        return 6.0

    

def do_script(c,q):
    c.execute("INSERT INTO appliance(type, name, price, category) VALUES(?,?,?,?)", q)

con = sqlite3.connect('recomm-ai.db')

cur = con.cursor()

# Create table
try:
    cur.execute("CREATE TABLE appliance(id INTEGER PRIMARY KEY AutoIncrement, type TEXT NOT NULL, name TEXT NOT NULL, price INTEGER NOT NULL, category FLOAT NOT NULL);")
except:
    cur.execute("DROP TABLE appliance;")
    cur.execute("CREATE TABLE appliance(id INTEGER PRIMARY KEY AutoIncrement, type TEXT NOT NULL, name TEXT NOT NULL, price INTEGER NOT NULL, category FLOAT NOT NULL);")


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
    "electric_stovetop",#tipo
    "", #marca
    ,#price
    category(),#category
]
do_script(cur, lang_list)

lang_list = [
    "electric_stovetop",#tipo
    "", #marca
    ,#price
    category(),#category
]
do_script(cur, lang_list)

lang_list = [
    "electric_stovetop",#tipo
    "", #marca
    ,#price
    category(),#category
]
do_script(cur, lang_list)

lang_list = [
    "electric_stovetop",#tipo
    "", #marca
    ,#price
    category(),#category
]
do_script(cur, lang_list)

lang_list = [
    "electric_stovetop",#tipo
    "", #marca
    ,#price
    category(),#category
]
do_script(cur, lang_list)

lang_list = [
    "electric_stovetop",#tipo
    "", #marca
    ,#price
    category(),#category
]
do_script(cur, lang_list)

lang_list = [
    "electric_stovetop",#tipo
    "", #marca
    ,#price
    category(),#category
]
do_script(cur, lang_list)

lang_list = [
    "electric_stovetop",#tipo
    "", #marca
    ,#price
    category(),#category
]
do_script(cur, lang_list)

lang_list = [
    "electric_stovetop",#tipo
    "", #marca
    ,#price
    category(),#category
]
do_script(cur, lang_list)

lang_list = [
    "electric_stovetop",#tipo
    "", #marca
    ,#price
    category(),#category
]
do_script(cur, lang_list)




'''

# appliance: electric_stovetop
lang_list = [
    "micro",#tipo
    "LG", #marca
    300,#price
    category(300),#category
]
do_script(cur, lang_list)

# appliance: elevator
lang_list = [
    "micro",#tipo
    "LG", #marca
    300,#price
    category(300),#category
]
do_script(cur, lang_list)

# appliance: gas_stovetop
lang_list = [
    "micro",#tipo
    "LG", #marca
    300,#price
    category(300),#category
]
do_script(cur, lang_list)

# appliance: microwave
lang_list = [
    "micro",#tipo
    "LG", #marca
    300,#price
    category(300),#category
]
do_script(cur, lang_list)

# appliance: oven
lang_list = [
    "micro",#tipo
    "LG", #marca
    300,#price
    category(300),#category
]
do_script(cur, lang_list)

# appliance: radiator
lang_list = [
    "micro",#tipo
    "LG", #marca
    300,#price
    category(300),#category
]
do_script(cur, lang_list)

# appliance: baseboard_radiator
lang_list = [
    "micro",#tipo
    "LG", #marca
    300,#price
    category(300),#category
]
do_script(cur, lang_list)

# appliance: range_hood
lang_list = [
    "micro",#tipo
    "LG", #marca
    300,#price
    category(300),#category
]
do_script(cur, lang_list)

# appliance: range_oven
lang_list = [
    "micro",#tipo
    "LG", #marca
    300,#price
    category(300),#category
]
do_script(cur, lang_list)

# appliance: gas_range_oven
lang_list = [
    "micro",#tipo
    "LG", #marca
    300,#price
    category(300),#category
]
do_script(cur, lang_list)

# appliance: electric_range_oven
lang_list = [
    "micro",#tipo
    "LG", #marca
    300,#price
    category(300),#category
]
do_script(cur, lang_list)

# appliance: refrigerator
lang_list = [
    "micro",#tipo
    "LG", #marca
    300,#price
    category(300),#category
]
do_script(cur, lang_list)

# appliance: tv
lang_list = [
    "micro",#tipo
    "LG", #marca
    300,#price
    category(300),#category
]
do_script(cur, lang_list)


# appliance: wall_mounted_ac
lang_list = [
    "micro",#tipo
    "LG", #marca
    300,#price
    category(300),#category
]
do_script(cur, lang_list)

# appliance: washer__dryer
lang_list = [
    "micro",#tipo
    "LG", #marca
    300,#price
    category(300),#category
]
do_script(cur, lang_list)

# appliance: water_heater
lang_list = [
    "micro",#tipo
    "LG", #marca
    300,#price
    category(300),#category
]
do_script(cur, lang_list)

'''
# Save (commit) the changes
con.commit()

# We can also close the connection if we are done with it.
# Just be sure any changes have been committed or they will be lost.
con.close()