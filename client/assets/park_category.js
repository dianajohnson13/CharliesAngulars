
///http://irmaservices.nps.gov/v3/rest/npspecies/urlOptions/categories

var species = ["Mammals","Birds","Reptiles","Amphibians","Fish","Plants","Plants",["Crab","Lobsters","Shrimp"],["Slugs","Snails"],["Spiders","Scorpions"],"Insects","Non-vertebrates","Fungi","Protozoa","Chromista","Bacteria","Archaea"];



// http://irmaservices.nps.gov/v3/rest/npspecies/checklist/PARKCODE/CATEGORY
var parkLists = [{parkName:"Abraham Lincoln Birthplace National Historical Park", parkCode:"ABLI"}
,{parkName:"Acadia National Park", parkCode:"ACAD"}
,{parkName:"Adams National Historical Park", parkCode:"ADAM"}
,{parkName:"African American Civil War Memorial", parkCode:"AFAM"}
,{parkName:"African Burial Ground National Monument", parkCode:"AFBG"}
,{parkName:"Agate Fossil Beds National Monument", parkCode:"AGFO"}
,{parkName:"Ala Kahakai National Historic Trail", parkCode:"ALKA"}
,{parkName:"Alagnak Wild River", parkCode:"ALAG"}
,{parkName:"Alcatraz Island", parkCode:"ALCA"}
,{parkName:"Aleutian World War II National Historic Area", parkCode:"ALEU"}
,{parkName:"Alibates Flint Quarries National Monument", parkCode:"ALFL"}
,{parkName:"Allegheny Portage Railroad National Historic Site", parkCode:"ALPO"}
,{parkName:"American Memorial Park", parkCode:"AMME"}
,{parkName:"Amistad National Recreation Area", parkCode:"AMIS"}
,{parkName:"Anacostia Park", parkCode:"ANAC"}
,{parkName:"Andersonville National Historic Site", parkCode:"ANDE"}
,{parkName:"Andrew Johnson National Historic Site", parkCode:"ANJO"}
,{parkName:"Aniakchak National Monument and Preserve", parkCode:"ANIA"}
,{parkName:"Antietam National Battlefield", parkCode:"ANTI"}
,{parkName:"Antietam National Cemetery", parkCode:"ANCM"}
,{parkName:"Apostle Islands National Lakeshore", parkCode:"APIS"}
,{parkName:"Appalachian National Scenic Trail", parkCode:"APPA"}
,{parkName:"Appomattox Court House National Historical Park", parkCode:"APCO"}
,{parkName:"Arches National Park", parkCode:"ARCH"}
,{parkName:"Arkansas Post National Memorial", parkCode:"ARPO"}
,{parkName:"Arlington House, The Robert E. Lee Memorial", parkCode:"ARHO"}
,{parkName:"Assateague Island National Seashore", parkCode:"ASIS"}
,{parkName:"Aztec Ruins National Monument", parkCode:"AZRU"}
,{parkName:"Badlands National Park", parkCode:"BADL"}
,{parkName:"Baltimore-Washington National Parkway", parkCode:"BAWA"}
,{parkName:"Bandelier National Monument", parkCode:"BAND"}
,{parkName:"Battleground National Cemetery", parkCode:"BATT"}
,{parkName:"Bear Paw Battlefield", parkCode:"BEPA"}
,{parkName:"Benjamin Franklin National Memorial", parkCode:"BEFR"}
,{parkName:"Bent's Old Fort National Historic Site", parkCode:"BEOL"}
,{parkName:"Bering Land Bridge National Preserve", parkCode:"BELA"}
,{parkName:"Beringia International Heritage Park", parkCode:"BERI"}
,{parkName:"Big Bend National Park", parkCode:"BIBE"}
,{parkName:"Big Cypress National Preserve", parkCode:"BICY"}
,{parkName:"Big Hole National Battlefield", parkCode:"BIHO"}
,{parkName:"Big South Fork National River and Recreation Area", parkCode:"BISO"}
,{parkName:"Big Thicket National Preserve", parkCode:"BITH"}
,{parkName:"Bighorn Canyon National Recreation Area", parkCode:"BICA"}
,{parkName:"Biscayne National Park", parkCode:"BISC"}
,{parkName:"Black Canyon of the Gunnison National Park", parkCode:"BLCA"}
,{parkName:"Blackstone River Valley National Heritage Corridor", parkCode:"BLAC"}
,{parkName:"Blackstone River Valley National Historical Park", parkCode:"BLRV"}
,{parkName:"Blue Ridge Parkway", parkCode:"BLRI"}
,{parkName:"Bluestone National Scenic River", parkCode:"BLUE"}
,{parkName:"Booker T. Washington National Monument", parkCode:"BOWA"}
,{parkName:"Boston African American National Historic Site", parkCode:"BOAF"}
,{parkName:"Boston Harbor Islands National Recreation Area", parkCode:"BOHA"}
,{parkName:"Boston National Historical Park", parkCode:"BOST"}
,{parkName:"Brices Cross Roads National Battlefield Site", parkCode:"BRCR"}
,{parkName:"Brown v. Board of Education National Historic Site", parkCode:"BRVB"}
,{parkName:"Bryce Canyon National Park", parkCode:"BRCA"}
,{parkName:"Buck Island Reef National Monument", parkCode:"BUIS"}
,{parkName:"Buffalo National River", parkCode:"BUFF"}
,{parkName:"Cabrillo National Monument", parkCode:"CABR"}
,{parkName:"Cache La Poudre River Corridor National Heritage Area", parkCode:"CALA"}
,{parkName:"California National Historic Trail", parkCode:"CALI"}
,{parkName:"Canaveral National Seashore", parkCode:"CANA"}
,{parkName:"Cane River Creole National Historical Park", parkCode:"CARI"}
,{parkName:"Cane River National Heritage Area", parkCode:"CRHA"}
,{parkName:"Canyon De Chelly National Monument", parkCode:"CACH"}
,{parkName:"Canyonlands National Park", parkCode:"CANY"}
,{parkName:"Cape Cod National Seashore", parkCode:"CACO"}
,{parkName:"Cape Hatteras National Seashore", parkCode:"CAHA"}
,{parkName:"Cape Henry National Memorial", parkCode:"CAME"}
,{parkName:"Cape Krusenstern National Monument", parkCode:"CAKR"}
,{parkName:"Cape Lookout National Seashore", parkCode:"CALO"}
,{parkName:"Capitol Hill Parks", parkCode:"CAHE"}
,{parkName:"Capitol Reef National Park", parkCode:"CARE"}
,{parkName:"Captain John Smith Chesapeake National Historic Trail", parkCode:"CAJO"}
,{parkName:"Capulin Volcano National Monument", parkCode:"CAVO"}
,{parkName:"Carl Sandburg Home National Historic Site", parkCode:"CARL"}
,{parkName:"Carlsbad Caverns National Park", parkCode:"CAVE"}
,{parkName:"Carter G. Woodson Home National Historic Site", parkCode:"CAWO"}
,{parkName:"Casa Grande Ruins National Monument", parkCode:"CAGR"}
,{parkName:"Castillo De San Marcos National Monument", parkCode:"CASA"}
,{parkName:"Castle Clinton National Monument", parkCode:"CACL"}
,{parkName:"Catoctin Mountain Park", parkCode:"CATO"}
,{parkName:"Cedar Breaks National Monument", parkCode:"CEBR"}
,{parkName:"Cedar Creek and Belle Grove National Historical Park", parkCode:"CEBE"}
,{parkName:"Central High School National Historic Site", parkCode:"CHSC"}
,{parkName:"Cesar E. Chavez National Monument", parkCode:"CECH"}
,{parkName:"Chaco Culture National Historical Park", parkCode:"CHCU"}
,{parkName:"Chamizal National Memorial", parkCode:"CHAM"}
,{parkName:"Channel Islands National Park", parkCode:"CHIS"}
,{parkName:"Charles Pinckney National Historic Site", parkCode:"CHPI"}
,{parkName:"Charles Young Buffalo Soldiers National Monument", parkCode:"CHYO"}
,{parkName:"Chattahoochee River National Recreation Area", parkCode:"CHAT"}
,{parkName:"Chesapeake and Ohio Canal National Historical Park", parkCode:"CHOH"}
,{parkName:"Chesapeake Bay Gateways", parkCode:"CBPO"}
,{parkName:"Chicago Portage National Historic Site", parkCode:"CHPO"}
,{parkName:"Chickamauga and Chattanooga National Military Park", parkCode:"CHCH"}
,{parkName:"Chickasaw National Recreation Area", parkCode:"CHIC"}
,{parkName:"Chimney Rock National Historic Site", parkCode:"CHRO"}
,{parkName:"Chiricahua National Monument", parkCode:"CHIR"}
,{parkName:"Christiansted National Historic Site", parkCode:"CHRI"}
,{parkName:"City Of Rocks National Reserve", parkCode:"CIRO"}
,{parkName:"Clara Barton National Historic Site", parkCode:"CLBA"}
,{parkName:"Claude Moore Colonial Farm", parkCode:"CLMO"}
,{parkName:"Colonial National Historical Park", parkCode:"COLO"}
,{parkName:"Colonial Parkway", parkCode:"COLP"}
,{parkName:"Colorado National Monument", parkCode:"COLM"}
,{parkName:"Congaree National Park", parkCode:"CONG"}
,{parkName:"Constitution Gardens", parkCode:"COGA"}
,{parkName:"Coronado National Memorial", parkCode:"CORO"}
,{parkName:"Cowpens National Battlefield", parkCode:"COWP"}
,{parkName:"Crater Lake National Park", parkCode:"CRLA"}
,{parkName:"Craters of the Moon National Monument and Preserve", parkCode:"CRMO"}
,{parkName:"Crown of the Continent Ecosystem", parkCode:"CRCO"}
,{parkName:"Cumberland Gap National Historical Park", parkCode:"CUGA"}
,{parkName:"Cumberland Island National Seashore", parkCode:"CUIS"}
,{parkName:"Curecanti National Recreation Area", parkCode:"CURE"}
,{parkName:"Cuyahoga Valley National Park", parkCode:"CUVA"}
,{parkName:"David Berger National Memorial", parkCode:"DABE"}
,{parkName:"Dayton Aviation Heritage National Historical Park", parkCode:"DAAV"}
,{parkName:"Death Valley National Park", parkCode:"DEVA"}
,{parkName:"Delaware and Lehigh Navigation Canal National Heritage Corridor", parkCode:"DELE"}
,{parkName:"Delaware National Scenic River", parkCode:"DELA"}
,{parkName:"Delaware Water Gap National Recreation Area", parkCode:"DEWA"}
,{parkName:"Denali National Park and Preserve", parkCode:"DENA"}
,{parkName:"DeSoto National Memorial", parkCode:"DESO"}
,{parkName:"Devils Postpile National Monument", parkCode:"DEPO"}
,{parkName:"Devils Tower National Monument", parkCode:"DETO"}
,{parkName:"Dinosaur National Monument", parkCode:"DINO"}
,{parkName:"Dry Tortugas National Park", parkCode:"DRTO"}
,{parkName:"East Potomac Park", parkCode:"EAPO"}
,{parkName:"Ebey's Landing National Historical Reserve", parkCode:"EBLA"}
,{parkName:"Edgar Allan Poe National Historic Site", parkCode:"EDAL"}
,{parkName:"Effigy Mounds National Monument", parkCode:"EFMO"}
,{parkName:"Eisenhower National Historic Site", parkCode:"EISE"}
,{parkName:"El Camino Real de los Tejas National Historic Trail", parkCode:"ELTE"}
,{parkName:"El Camino Real de Tierra Adentro National Historic Trail", parkCode:"ELCA"}
,{parkName:"El Malpais National Monument", parkCode:"ELMA"}
,{parkName:"El Morro National Monument", parkCode:"ELMO"}
,{parkName:"Eleanor Roosevelt National Historic Site", parkCode:"ELRO"}
,{parkName:"Ellis Island National Monument", parkCode:"ELIS"}
,{parkName:"Erie Canalway National Heritage Corridor", parkCode:"ERIE"}
,{parkName:"Essex National Heritage Area", parkCode:"ESSE"}
,{parkName:"Eugene O'Neill National Historic Site", parkCode:"EUON"}
,{parkName:"Everglades National Park", parkCode:"EVER"}
,{parkName:"Fallen Timbers Battlefield", parkCode:"FATI"}
,{parkName:"Farmington National Wild And Scenic River", parkCode:"FARM"}
,{parkName:"Father Marquette National Memorial", parkCode:"FAMA"}
,{parkName:"Federal Hall National Memorial", parkCode:"FEHA"}
,{parkName:"Fire Island National Seashore", parkCode:"FIIS"}
,{parkName:"First Ladies National Historic Site", parkCode:"FILA"}
,{parkName:"First State National Historical Park", parkCode:"FRST"}
,{parkName:"Flight 93 National Memorial", parkCode:"FLNI"}
,{parkName:"Florissant Fossil Beds National Monument", parkCode:"FLFO"}
,{parkName:"Ford's Theatre National Historic Site", parkCode:"FOTH"}
,{parkName:"Fort Bowie National Historic Site", parkCode:"FOBO"}
,{parkName:"Fort Caroline National Memorial", parkCode:"FOCA"}
,{parkName:"Fort Circle Parks", parkCode:"FOCI"}
,{parkName:"Fort Davis National Historic Site", parkCode:"FODA"}
,{parkName:"Fort Donelson National Battlefield", parkCode:"FODO"}
,{parkName:"Fort Donelson National Cemetery", parkCode:"FDNC"}
,{parkName:"Fort Dupont Park", parkCode:"FODU"}
,{parkName:"Fort Foote Park", parkCode:"FOFO"}
,{parkName:"Fort Frederica National Monument", parkCode:"FOFR"}
,{parkName:"Fort Laramie National Historic Site", parkCode:"FOLA"}
,{parkName:"Fort Larned National Historic Site", parkCode:"FOLS"}
,{parkName:"Fort Matanzas National Monument", parkCode:"FOMA"}
,{parkName:"Fort McHenry National Monument and Historic Shrine", parkCode:"FOMC"}
,{parkName:"Fort Monroe National Monument", parkCode:"FOMR"}
,{parkName:"Fort Moultrie National Monument", parkCode:"FOMO"}
,{parkName:"Fort Necessity National Battlefield", parkCode:"FONE"}
,{parkName:"Fort Point National Historic Site", parkCode:"FOPO"}
,{parkName:"Fort Pulaski National Monument", parkCode:"FOPU"}
,{parkName:"Fort Raleigh National Historic Site", parkCode:"FORA"}
,{parkName:"Fort Scott National Historic Site", parkCode:"FOSC"}
,{parkName:"Fort Smith National Historic Site", parkCode:"FOSM"}
,{parkName:"Fort Stanwix National Monument", parkCode:"FOST"}
,{parkName:"Fort Sumter National Monument", parkCode:"FOSU"}
,{parkName:"Fort Union National Monument", parkCode:"FOUN"}
,{parkName:"Fort Union Trading Post National Historic Site", parkCode:"FOUS"}
,{parkName:"Fort Vancouver National Historic Site", parkCode:"FOVA"}
,{parkName:"Fort Washington Park", parkCode:"FOWA"}
,{parkName:"Fossil Butte National Monument", parkCode:"FOBU"}
,{parkName:"Francis Scott Key National Memorial", parkCode:"FRSC"}
,{parkName:"Franklin Delano Roosevelt National Memorial", parkCode:"FRDE"}
,{parkName:"Frederick Douglass National Historic Site", parkCode:"FRDO"}
,{parkName:"Frederick Law Olmsted National Historic Site", parkCode:"FRLA"}
,{parkName:"Fredericksburg and Spotsylvania County Battlefields Memorial National Military Park", parkCode:"FRSP"}
,{parkName:"Fredericksburg National Cemetery", parkCode:"FRED"}
,{parkName:"Friendship Hill National Historic Site", parkCode:"FRHI"}
,{parkName:"Gates Of The Arctic National Park and Preserve", parkCode:"GAAR"}
,{parkName:"Gateway National Recreation Area", parkCode:"GATE"}
,{parkName:"Gauley River National Recreation Area", parkCode:"GARI"}
,{parkName:"General Grant National Memorial", parkCode:"GEGR"}
,{parkName:"George Mason Memorial", parkCode:"GEMM"}
,{parkName:"George Rogers Clark National Historical Park", parkCode:"GERO"}
,{parkName:"George Washington Birthplace National Monument", parkCode:"GEWA"}
,{parkName:"George Washington Carver National Monument", parkCode:"GWCA"}
,{parkName:"George Washington Memorial Parkway", parkCode:"GWMP"}
,{parkName:"Gettysburg National Cemetery", parkCode:"GETC"}
,{parkName:"Gettysburg National Military Park", parkCode:"GETT"}
,{parkName:"Gila Cliff Dwellings National Monument", parkCode:"GICL"}
,{parkName:"Glacier Bay National Park and Preserve", parkCode:"GLBA"}
,{parkName:"Glacier National Park", parkCode:"GLAC"}
,{parkName:"Glen Canyon National Recreation Area", parkCode:"GLCA"}
,{parkName:"Glen Echo Park", parkCode:"GLEC"}
,{parkName:"Gloria Dei", parkCode:"Old Swedes"}
,{parkName:"Church National Historic Site", parkCode:"GLDE"}
,{parkName:"Glorieta National Battlefield", parkCode:"GLOR"}
,{parkName:"Golden Gate National Recreation Area", parkCode:"GOGA"}
,{parkName:"Golden Spike National Historic Site", parkCode:"GOSP"}
,{parkName:"Governors Island National Monument", parkCode:"GOIS"}
,{parkName:"Grand Canyon National Park", parkCode:"GRCA"}
,{parkName:"Grand Portage National Monument", parkCode:"GRPO"}
,{parkName:"Grand Teton National Park", parkCode:"GRTE"}
,{parkName:"Grant-Kohrs Ranch National Historic Site", parkCode:"GRKO"}
,{parkName:"Great Basin National Park", parkCode:"GRBA"}
,{parkName:"Great Egg Harbor National Scenic and Recreational River", parkCode:"GREG"}
,{parkName:"Great Falls Park", parkCode:"GRFA"}
,{parkName:"Great Sand Dunes National Park and Preserve", parkCode:"GRSA"}
,{parkName:"Great Smoky Mountains National Park", parkCode:"GRSM"}
,{parkName:"Green Springs National Historic Landmark District", parkCode:"GRSP"}
,{parkName:"Greenbelt Park", parkCode:"GREE"}
,{parkName:"Guadalupe Mountains National Park", parkCode:"GUMO"}
,{parkName:"Guilford Courthouse National Military Park", parkCode:"GUCO"}
,{parkName:"Gulf Islands National Seashore", parkCode:"GUIS"}
,{parkName:"Hagerman Fossil Beds National Monument", parkCode:"HAFO"}
,{parkName:"Haleakala National Park", parkCode:"HALE"}
,{parkName:"Hamilton Grange National Memorial", parkCode:"HAGR"}
,{parkName:"Hampton National Historic Site", parkCode:"HAMP"}
,{parkName:"Harmony Hall", parkCode:"HAHA"}
,{parkName:"Harpers Ferry National Historical Park", parkCode:"HAFE"}
,{parkName:"Harriet Tubman Underground Railroad National Historical Park", parkCode:"HATU"}
,{parkName:"Harry S. Truman National Historic Site", parkCode:"HSTR"}
,{parkName:"Hawaii Volcanoes National Park", parkCode:"HAVO"}
,{parkName:"Herbert Hoover National Historic Site", parkCode:"HEHO"}
,{parkName:"Historic Camden Revolutionary War Site", parkCode:"HICA"}
,{parkName:"Hohokam Pima National Monument", parkCode:"PIMA"}
,{parkName:"Home of Franklin D. Roosevelt National Historic Site", parkCode:"HOFR"}
,{parkName:"Homestead National Monument of America", parkCode:"HOME"}
,{parkName:"Honouliuli National Monument", parkCode:"HONO"}
,{parkName:"Hopewell Culture National Historical Park", parkCode:"HOCU"}
,{parkName:"Hopewell Furnace National Historic Site", parkCode:"HOFU"}
,{parkName:"Horseshoe Bend National Military Park", parkCode:"HOBE"}
,{parkName:"Hot Springs National Park", parkCode:"HOSP"}
,{parkName:"Hovenweep National Monument", parkCode:"HOVE"}
,{parkName:"Hubbell Trading Post National Historic Site", parkCode:"HUTR"}
,{parkName:"Ice Age National Scenic Trail", parkCode:"IATR"}
,{parkName:"Ice Age National Scientific Reserve", parkCode:"ICAG"}
,{parkName:"Illinois and Michigan Canal National Heritage Corridor", parkCode:"ILMI"}
,{parkName:"Independence National Historical Park", parkCode:"INDE"}
,{parkName:"Indiana Dunes National Lakeshore", parkCode:"INDU"}
,{parkName:"International Peace Garden", parkCode:"INPE"}
,{parkName:"Inupiat Heritage Center", parkCode:"INUP"}
,{parkName:"Isle Royale National Park", parkCode:"ISRO"}
,{parkName:"James A. Garfield National Historic Site", parkCode:"JAGA"}
,{parkName:"Jamestown National Historic Site", parkCode:"JAME"}
,{parkName:"Jean Lafitte National Historical Park and Preserve", parkCode:"JELA"}
,{parkName:"Jefferson National Expansion Memorial", parkCode:"JEFF"}
,{parkName:"Jewel Cave National Monument", parkCode:"JECA"}
,{parkName:"Jimmy Carter National Historic Site", parkCode:"JICA"}
,{parkName:"John D. Rockefeller Jr. Memorial Parkway", parkCode:"JODR"}
,{parkName:"John Day Fossil Beds National Monument", parkCode:"JODA"}
,{parkName:"John Ericsson National Memorial", parkCode:"JOER"}
,{parkName:"John F. Kennedy Center for the Performing Arts", parkCode:"JOFK"}
,{parkName:"John Fitzgerald  Kennedy National Historic Site", parkCode:"JOFI"}
,{parkName:"John Muir National Historic Site", parkCode:"JOMU"}
,{parkName:"Johnstown Flood National Memorial", parkCode:"JOFL"}
,{parkName:"Joshua Tree National Park", parkCode:"JOTR"}
,{parkName:"Juan Bautista De Anza National Historic Trail", parkCode:"JUBA"}
,{parkName:"Kalaupapa National Historical Park", parkCode:"KALA"}
,{parkName:"Kaloko-Honokohau National Historical Park", parkCode:"KAHO"}
,{parkName:"Katmai National Park and Preserve", parkCode:"KATM"}
,{parkName:"Kenai Fjords National Park", parkCode:"KEFJ"}
,{parkName:"Kenilworth Park and Aquatic Gardens", parkCode:"KEPA"}
,{parkName:"Kennesaw Mountain National Battlefield Park", parkCode:"KEMO"}
,{parkName:"Keweenaw National Historical Park", parkCode:"KEWE"}
,{parkName:"Kings Canyon National Park", parkCode:"KICA"}
,{parkName:"Kings Mountain National Military Park", parkCode:"KIMO"}
,{parkName:"Klondike Gold Rush - Seattle Unit National Historical Park", parkCode:"KLSE"}
,{parkName:"Klondike Gold Rush National Historical Park", parkCode:"KLGO"}
,{parkName:"Knife River Indian Villages National Historic Site", parkCode:"KNRI"}
,{parkName:"Kobuk Valley National Park", parkCode:"KOVA"}
,{parkName:"Korean War Veterans National Memorial", parkCode:"KOWA"}
,{parkName:"Lake Chelan National Recreation Area", parkCode:"LACH"}
,{parkName:"Lake Clark National Park and Preserve", parkCode:"LACL"}
,{parkName:"Lake Mead National Recreation Area", parkCode:"LAKE"}
,{parkName:"Lake Meredith National Recreation Area", parkCode:"LAMR"}
,{parkName:"Lake Roosevelt National Recreation Area", parkCode:"LARO"}
,{parkName:"Lamprey Wild and Scenic River", parkCode:"LAMP"}
,{parkName:"Lassen Volcanic National Park", parkCode:"LAVO"}
,{parkName:"Lava Beds National Monument", parkCode:"LABE"}
,{parkName:"Lewis and Clark National Historic Trail", parkCode:"LECL"}
,{parkName:"Lewis and Clark National Historical Park", parkCode:"LEWI"}
,{parkName:"Lincoln Boyhood National Memorial", parkCode:"LIBO"}
,{parkName:"Lincoln Home National Historic Site", parkCode:"LIHO"}
,{parkName:"Lincoln Memorial", parkCode:"LINC"}
,{parkName:"Little Bighorn Battlefield National Monument", parkCode:"LIBI"}
,{parkName:"Little River Canyon National Preserve", parkCode:"LIRI"}
,{parkName:"Longfellow House - Washington's Headquarters National Historic Site", parkCode:"LONG"}
,{parkName:"Lowell National Historical Park", parkCode:"LOWE"}
,{parkName:"Lower East Side Tenement Museum National Historic Site", parkCode:"LOEA"}
,{parkName:"Lower Saint Croix National Scenic Riverway", parkCode:"LOSA"}
,{parkName:"Lyndon B. Johnson National Historical Park", parkCode:"LYJO"}
,{parkName:"Lyndon Baines Johnson Memorial Grove on the Potomac", parkCode:"LYBA"}
,{parkName:"Maggie L. Walker National Historic Site", parkCode:"MAWA"}
,{parkName:"Mammoth Cave National Park", parkCode:"MACA"}
,{parkName:"Manassas National Battlefield Park", parkCode:"MANA"}
,{parkName:"Manhattan Project National Historical Park", parkCode:"MAPR"}
,{parkName:"Manhattan Sites", parkCode:"MASI"}
,{parkName:"Manzanar National Historic Site", parkCode:"MANZ"}
,{parkName:"Mar-A-Lago National Historic Site", parkCode:"MAAL"}
,{parkName:"Marin Headlands Sites", parkCode:"MAHE"}
,{parkName:"Marsh-Billings-Rockefeller National Historical Park", parkCode:"MABI"}
,{parkName:"Martin Luther King, Jr National Historic Site", parkCode:"MALU"}
,{parkName:"Martin Luther King, Jr. National Memorial", parkCode:"MLKM"}
,{parkName:"Martin Van Buren National Historic Site", parkCode:"MAVA"}
,{parkName:"Mary McLeod Bethune Council House National Historic Site", parkCode:"MABE"}
,{parkName:"Maurice National Wild And Scenic River", parkCode:"MAUR"}
,{parkName:"McLoughlin House National Historic Site", parkCode:"MCHO"}
,{parkName:"Meridian Hill Park", parkCode:"MEHI"}
,{parkName:"Mesa Verde National Park", parkCode:"MEVE"}
,{parkName:"Mimbres Culture National Monument", parkCode:"MICU"}
,{parkName:"Minidoka Internment National Historic Site", parkCode:"MIIN"}
,{parkName:"Minute Man National Historical Park", parkCode:"MIMA"}
,{parkName:"Minuteman Missile National Historic Site", parkCode:"MIMI"}
,{parkName:"Mississippi National River and Recreation Areas", parkCode:"MISS"}
,{parkName:"Missouri National Recreational River", parkCode:"MNRR"}
,{parkName:"Mojave National Preserve", parkCode:"MOJA"}
,{parkName:"Monocacy National Battlefield", parkCode:"MONO"}
,{parkName:"Montezuma Castle National Monument", parkCode:"MOCA"}
,{parkName:"Moores Creek National Battlefield", parkCode:"MOCR"}
,{parkName:"Mormon Pioneer National Historic Trail", parkCode:"MOPI"}
,{parkName:"Morristown National Historical Park", parkCode:"MORR"}
,{parkName:"Mount Rainier National Park", parkCode:"MORA"}
,{parkName:"Mount Rushmore National Memorial", parkCode:"MORU"}
,{parkName:"Muir Woods National Monument", parkCode:"MUWO"}
,{parkName:"Natchez National Historical Park", parkCode:"NATC"}
,{parkName:"Natchez Trace National Scenic Trail", parkCode:"NATT"}
,{parkName:"Natchez Trace Parkway", parkCode:"NATR"}
,{parkName:"National Capital Parks", parkCode:"NACA"}
,{parkName:"National Capital Parks-East", parkCode:"NACE"}
,{parkName:"National Law Enforcement Officers National Memorial", parkCode:"NLEM"}
,{parkName:"National Mall", parkCode:"MALL"}
,{parkName:"National Mall and Memorial Parks", parkCode:"NAMA"}
,{parkName:"National Park of American Samoa", parkCode:"NPSA"}
,{parkName:"National Parks of New York Harbor Management Unit", parkCode:"NPNH"}
,{parkName:"Natural Bridges National Monument", parkCode:"NABR"}
,{parkName:"Navajo National Monument", parkCode:"NAVA"}
,{parkName:"New Bedford Whaling National Historical Park", parkCode:"NEBE"}
,{parkName:"New England National Scenic Trail", parkCode:"NEEN"}
,{parkName:"New Jersey Coastal Heritage Trail Route", parkCode:"NEJE"}
,{parkName:"New Orleans Jazz National Historical Park", parkCode:"JAZZ"}
,{parkName:"New River Gorge National River", parkCode:"NERI"}
,{parkName:"Nez Perce National Historical Park", parkCode:"NEPE"}
,{parkName:"Nicodemus National Historic Site", parkCode:"NICO"}
,{parkName:"Ninety Six National Historic Site", parkCode:"NISI"}
,{parkName:"Niobrara and Missouri National Scenic and Recreational Rivers", parkCode:"NIMI"}
,{parkName:"Niobrara National Scenic River", parkCode:"NIOB"}
,{parkName:"Noatak National Preserve", parkCode:"NOAT"}
,{parkName:"North Cascades National Park", parkCode:"NOCA"}
,{parkName:"North Cascades National Park Service Complex", parkCode:"NCCO"}
,{parkName:"North Country National Scenic Trail", parkCode:"NOCO"}
,{parkName:"Obed Wild and Scenic River", parkCode:"OBRI"}
,{parkName:"Ocmulgee National Monument", parkCode:"OCMU"}
,{parkName:"Old Post Office Tower", parkCode:"OPOT"}
,{parkName:"Old Spanish National Historic Trail", parkCode:"OLSP"}
,{parkName:"Olympic National Park", parkCode:"OLYM"}
,{parkName:"Oregon Caves National Monument", parkCode:"ORCA"}
,{parkName:"Oregon National Historic Trail", parkCode:"OREG"}
,{parkName:"Organ Pipe Cactus National Monument", parkCode:"ORPI"}
,{parkName:"Overmountain Victory National Historic Trail", parkCode:"OVVI"}
,{parkName:"Oxon Cove Park and Oxon Hill Run", parkCode:"OXHI"}
,{parkName:"Oxon Run National Parkway", parkCode:"OXRU"}
,{parkName:"Ozark National Scenic Riverways", parkCode:"OZAR"}
,{parkName:"Padre Island National Seashore", parkCode:"PAIS"}
,{parkName:"Palo Alto Battlefield National Historical Park", parkCode:"PAAL"}
,{parkName:"Parashant National Monument", parkCode:"PARA"}
,{parkName:"Paterson Great Falls National Historical Park", parkCode:"PAGR"}
,{parkName:"Pea Ridge National Military Park", parkCode:"PERI"}
,{parkName:"Pecos National Historical Park", parkCode:"PECO"}
,{parkName:"Peirce Mill Park", parkCode:"PIMI"}
,{parkName:"Pennsylvania Avenue National Historic Site", parkCode:"PAAV"}
,{parkName:"Perry's Victory and International Peace Memorial", parkCode:"PEVI"}
,{parkName:"Petersburg National Battlefield", parkCode:"PETE"}
,{parkName:"Petrified Forest National Park", parkCode:"PEFO"}
,{parkName:"Petroglyph National Monument", parkCode:"PETR"}
,{parkName:"Pictured Rocks National Lakeshore", parkCode:"PIRO"}
,{parkName:"Pinelands National Reserve", parkCode:"PINE"}
,{parkName:"Pinnacles National Park", parkCode:"PINN"}
,{parkName:"Pipe Spring National Monument", parkCode:"PISP"}
,{parkName:"Pipestone National Monument", parkCode:"PIPE"}
,{parkName:"Piscataway Park", parkCode:"PISC"}
,{parkName:"Point Reyes National Seashore", parkCode:"PORE"}
,{parkName:"Pony Express National Historic Trail", parkCode:"POEX"}
,{parkName:"Poplar Grove National Cemetery", parkCode:"POGR"}
,{parkName:"Port Chicago Naval Magazine National Memorial", parkCode:"POCH"}
,{parkName:"Potomac Heritage National Scenic Trail", parkCode:"POHE"}
,{parkName:"Poverty Point National Monument", parkCode:"POPO"}
,{parkName:"President's Park", parkCode:"PRPA"}
,{parkName:"Presidio of San Francisco", parkCode:"PRSF"}
,{parkName:"Prince William Forest Park", parkCode:"PRWI"}
,{parkName:"Pullman National Monument", parkCode:"PULL"}
,{parkName:"Pu'uhonua o Honaunau National Historical Park", parkCode:"PUHO"}
,{parkName:"Puukohola Heiau National Historic Site", parkCode:"PUHE"}
,{parkName:"Quinebaug and Shetucket Rivers Valley National Heritage Corridor", parkCode:"QUSH"}
,{parkName:"Rainbow Bridge National Monument", parkCode:"RABR"}
,{parkName:"Redwood National Park", parkCode:"REDW"}
,{parkName:"Richmond National Battlefield Park", parkCode:"RICH"}
,{parkName:"Rio Grande Wild and Scenic River", parkCode:"RIGR"}
,{parkName:"River Raisin National Battlefield Park", parkCode:"RIRA"}
,{parkName:"Rock Creek Park", parkCode:"ROCR"}
,{parkName:"Rocky Mountain National Park", parkCode:"ROMO"}
,{parkName:"Roger Williams National Memorial", parkCode:"ROWI"}
,{parkName:"Roosevelt Campobello International Park", parkCode:"ROCA"}
,{parkName:"Roosevelt-Vanderbilt Headquarters", parkCode:"ROVA"}
,{parkName:"Rosie The Riveter WWII Home Front National Historical Park", parkCode:"RORI"}
,{parkName:"Ross Lake National Recreation Area", parkCode:"ROLA"}
,{parkName:"Russell Cave National Monument", parkCode:"RUCA"}
,{parkName:"Sagamore Hill National Historic Site", parkCode:"SAHI"}
,{parkName:"Saguaro National Park", parkCode:"SAGU"}
,{parkName:"Saint Croix Island International Historic Site", parkCode:"SACR"}
,{parkName:"Saint Croix National Scenic River", parkCode:"SACN"}
,{parkName:"Saint Paul's Church National Historic Site", parkCode:"SAPA"}
,{parkName:"Saint-Gaudens National Historic Site", parkCode:"SAGA"}
,{parkName:"Salem Maritime National Historic Site", parkCode:"SAMA"}
,{parkName:"Salinas Pueblo Missions National Monument", parkCode:"SAPU"}
,{parkName:"Salt River Bay National Historical Park and Ecological Preserve", parkCode:"SARI"}
,{parkName:"San Antonio Missions National Historical Park", parkCode:"SAAN"}
,{parkName:"San Francisco Maritime National Historical Park", parkCode:"SAFR"}
,{parkName:"San Juan Island National Historical Park", parkCode:"SAJH"}
,{parkName:"San Juan National Historic Site", parkCode:"SAJU"}
,{parkName:"Sand Creek Massacre National Historic Site", parkCode:"SAND"}
,{parkName:"Santa Fe National Historic Trail", parkCode:"SAFE"}
,{parkName:"Santa Monica Mountains National Recreation Area", parkCode:"SAMO"}
,{parkName:"Saratoga National Historical Park", parkCode:"SARA"}
,{parkName:"Saugus Iron Works National Historic Site", parkCode:"SAIR"}
,{parkName:"Scotts Bluff National Monument", parkCode:"SCBL"}
,{parkName:"Selma To Montgomery National Historic Trail", parkCode:"SEMO"}
,{parkName:"Sequoia and Kings Canyon National Parks", parkCode:"SEKI"}
,{parkName:"Sequoia National Park", parkCode:"SEQU"}
,{parkName:"Sewall-Belmont House National Historic Site", parkCode:"SEBE"}
,{parkName:"Shenandoah National Park", parkCode:"SHEN"}
,{parkName:"Shiloh National Cemetery", parkCode:"SHNC"}
,{parkName:"Shiloh National Military Park", parkCode:"SHIL"}
,{parkName:"Sitka National Historical Park", parkCode:"SITK"}
,{parkName:"Sleeping Bear Dunes National Lakeshore", parkCode:"SLBE"}
,{parkName:"Springfield Armory National Historic Site", parkCode:"SPAR"}
,{parkName:"Star-Spangled Banner National Historic Trail", parkCode:"STSP"}
,{parkName:"Statue of Liberty National Monument", parkCode:"STLI"}
,{parkName:"Steamtown National Historic Site", parkCode:"STEA"}
,{parkName:"Stones River National Battlefield", parkCode:"STRI"}
,{parkName:"Stones River National Cemetery", parkCode:"SRNC"}
,{parkName:"Sudbury, Assabet and Concord National Wild And Scenic River", parkCode:"SUAS"}
,{parkName:"Suitland Parkway", parkCode:"SUIT"}
,{parkName:"Sunset Crater Volcano National Monument", parkCode:"SUCR"}
,{parkName:"Tallgrass Prairie National Preserve", parkCode:"TAPR"}
,{parkName:"Thaddeus Kosciuszko National Memorial", parkCode:"THKO"}
,{parkName:"The Old Stone House", parkCode:"OLST"}
,{parkName:"Theodore Roosevelt Birthplace National Historic Site", parkCode:"THRB"}
,{parkName:"Theodore Roosevelt Inaugural National Historic Site", parkCode:"THRI"}
,{parkName:"Theodore Roosevelt Island National Memorial", parkCode:"THIS"}
,{parkName:"Theodore Roosevelt National Park", parkCode:"THRO"}
,{parkName:"Thomas Cole National Historic Site", parkCode:"THCO"}
,{parkName:"Thomas Edison National Historical Park", parkCode:"EDIS"}
,{parkName:"Thomas Jefferson Memorial", parkCode:"JEFM"}
,{parkName:"Thomas Stone National Historic Site", parkCode:"THST"}
,{parkName:"Timpanogos Cave National Monument", parkCode:"TICA"}
,{parkName:"Timucuan Ecological and Historic Preserve", parkCode:"TIMU"}
,{parkName:"Tonto National Monument", parkCode:"TONT"}
,{parkName:"Touro Synagogue National Historic Site", parkCode:"TOSY"}
,{parkName:"Trail of Tears National Historic Trail", parkCode:"TRTE"}
,{parkName:"Tule Springs Fossil Beds National Monument", parkCode:"TUSK"}
,{parkName:"Tumacacori National Historical Park", parkCode:"TUMA"}
,{parkName:"Tupelo National Battlefield", parkCode:"TUPE"}
,{parkName:"Tuskegee Airmen National Historic Site", parkCode:"TUAI"}
,{parkName:"Tuskegee Institute National Historic Site", parkCode:"TUIN"}
,{parkName:"Tuzigoot National Monument", parkCode:"TUZI"}
,{parkName:"U.S. Navy Memorial", parkCode:"NAVY"}
,{parkName:"Ulysses S. Grant National Historic Site", parkCode:"ULSG"}
,{parkName:"Upper Delaware National Scenic and Recreation River", parkCode:"UPDE"}
,{parkName:"Valles Caldera National Preserve", parkCode:"VALL"}
,{parkName:"Valley Forge National Historical Park", parkCode:"VAFO"}
,{parkName:"Vanderbilt Mansion National Historic Site", parkCode:"VAMA"}
,{parkName:"Vicksburg National Cemetery", parkCode:"VINC"}
,{parkName:"Vicksburg National Military Park", parkCode:"VICK"}
,{parkName:"Vietnam Veterans Memorial", parkCode:"VIVE"}
,{parkName:"Vietnam Womens National Memorial", parkCode:"VIWO"}
,{parkName:"Virgin Islands Coral Reef National Monument", parkCode:"VICR"}
,{parkName:"Virgin Islands National Park", parkCode:"VIIS"}
,{parkName:"Voyageurs National Park", parkCode:"VOYA"}
,{parkName:"Waco Mammoth National Monument", parkCode:"WACO"}
,{parkName:"Walnut Canyon National Monument", parkCode:"WACA"}
,{parkName:"War in the Pacific National Historical Park", parkCode:"WAPA"}
,{parkName:"Warm Springs Apache", parkCode:"WASP"}
,{parkName:"Warren G Harding National Memorial", parkCode:"WAHA"}
,{parkName:"Washington Monument National Memorial", parkCode:"WAMO"}
,{parkName:"Washington-Rochambeau Revolutionary Route National Historic Trail", parkCode:"WARO"}
,{parkName:"Washita Battlefield National Historic Site", parkCode:"WABA"}
,{parkName:"Waterton Lakes National Park", parkCode:"WALA"}
,{parkName:"Weir Farm National Historic Site", parkCode:"WEFA"}
,{parkName:"West Potomac Park", parkCode:"WEPO"}
,{parkName:"Western Arctic National Parklands", parkCode:"WEAR"}
,{parkName:"Whiskeytown National Recreation Area", parkCode:"WHIS"}
,{parkName:"White House", parkCode:"WHHO"}
,{parkName:"White House Visitor Center", parkCode:"WHVC"}
,{parkName:"White Sands National Monument", parkCode:"WHSA"}
,{parkName:"Whitman Mission National Historic Site", parkCode:"WHMI"}
,{parkName:"Wildcat Brook National Wild and Scenic River", parkCode:"WIBR"}
,{parkName:"William Howard Taft National Historic Site", parkCode:"WIHO"}
,{parkName:"William Jefferson Clinton Birthplace National Historic Site", parkCode:"WICL"}
,{parkName:"Wilson's Creek National Battlefield", parkCode:"WICR"}
,{parkName:"Wind Cave National Park", parkCode:"WICA"}
,{parkName:"Wolf Trap National Park for the Performing Arts", parkCode:"WOTR"}
,{parkName:"Women's Rights National Historical Park", parkCode:"WORI"}
,{parkName:"World War II Memorial", parkCode:"WWII"}
,{parkName:"World War II Valor in the Pacific National Monument", parkCode:"VALR"}
,{parkName:"Wrangell - St Elias National Park and Preserve", parkCode:"WRST"}
,{parkName:"Wright Brothers National Memorial", parkCode:"WRBR"}
,{parkName:"Wupatki National Monument", parkCode:"WUPA"}
,{parkName:"Yellowstone National Park", parkCode:"YELL"}
,{parkName:"Yorktown Battlefield", parkCode:"YONB"}
,{parkName:"Yorktown National Cemetery", parkCode:"YORK"}
,{parkName:"Yosemite National Park", parkCode:"YOSE"}
,{parkName:"Yucca House National Monument", parkCode:"YUHO"}
,{parkName:"Yukon-Charley Rivers National Preserve", parkCode:"YUCH"}
<<<<<<< 87076cdfe4fd331171247c1117a03e0953953064
,{parkName:"Zion National Park", parkCode:"ZION"}];
=======
,{parkName:"Zion National Park", parkCode:"ZION"}]
>>>>>>> fixed up html main file
