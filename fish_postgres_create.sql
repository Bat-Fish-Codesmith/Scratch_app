-- Started on 2023-12-23 18:52:10 MST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.user (
	"user_id" varchar NOT NULL,
	"password" varchar,
	"user_name" varchar,
	"profile_picture" varchar,
	CONSTRAINT "user_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE  public.post (
	"message_id" serial NOT NULL,
	-- "user_id" varchar NOT NULL,
	"content" varchar NOT NULL,
	"post_picture" bytea,
	"fish_name" varchar,
	"max_weight" float(2),
	"max_length" float(2),
	"total_likes" integer,
  "created_at" TIMESTAMP,
  "like_list" JSON,
	CONSTRAINT "post_pk" PRIMARY KEY ("message_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE  public.fish (
	"fish_name" varchar NOT NULL,
	"fish_picture" varchar NOT NULL,
  "information" varchar NOT NULL,
	"scientific_name" varchar NOT NULL,
	CONSTRAINT "fish_pk" PRIMARY KEY ("fish_name")
) WITH (
  OIDS=FALSE
);

-- ALTER TABLE public.user ADD CONSTRAINT "user_fk0" FOREIGN KEY ("user_id") REFERENCES  public.post("user_id");
ALTER TABLE public.post ADD CONSTRAINT "post_fk0" FOREIGN KEY ("fish_name") REFERENCES  public.fish("fish_name");

INSERT INTO public.fish VALUES ('Arrowtooth Flounder', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-07/640x427-Flounder-Arrowtooth-NOAAFisheries.png?itok=HW87FG4V', 'https://www.fisheries.noaa.gov/species/arrowtooth-flounder', 'Atheresthes stomias');
INSERT INTO public.fish VALUES ('Bocaccio', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/dam-migration/640x427-bocaccio.jpg?itok=tFRg8DQu', 'https://www.fisheries.noaa.gov/species/bocaccio', 'Sebastes paucispinis');
INSERT INTO public.fish VALUES ('Canary Rockfish', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/dam-migration/640x427-canary_rockfish.png?itok=_J9UuDvK', 'https://www.fisheries.noaa.gov/species/canary-rockfish', 'Sebastes pinniger');
INSERT INTO public.fish VALUES ('Chinook Salmon', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-10/640x427-Salmon-Chinook-NOAAFisheries.png?itok=q8NG8KJB', 'https://www.fisheries.noaa.gov/species/chinook-salmon', 'Oncorhynchus tshawytscha');
INSERT INTO public.fish VALUES ('Chum Salmon', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-10/640x427-Salmon-Chum-NOAAFisheries.png?itok=JkfRQcNp', 'https://www.fisheries.noaa.gov/species/chum-salmon', 'Oncorhynchus keta');
INSERT INTO public.fish VALUES ('Coho Salmon', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-10/640x427-Salmon-Coho-NOAAFisheries.png?itok=3Ld6cPzB', 'https://www.fisheries.noaa.gov/species/coho-salmon', 'Oncorhynchus kisutch');
INSERT INTO public.fish VALUES ('Dover Sole', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-10/640x427-Sole-Dover-NOAAFisheries.png?itok=A2Px1E0h', 'https://www.fisheries.noaa.gov/species/dover-sole', 'Microstomus pacificus');
INSERT INTO public.fish VALUES ('English Sole', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-10/640x427-Sole-English-NOAAFisheries.png?itok=_6PuwMsl', 'https://www.fisheries.noaa.gov/species/english-sole', 'Parophrys vetulus');
INSERT INTO public.fish VALUES ('Flathead Sole', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-10/640x427-Sole-Flathead-NOAAFisheries.png?itok=Rj77OlGv', 'https://www.fisheries.noaa.gov/species/flathead-sole', 'Hippoglossoides elassodon');
INSERT INTO public.fish VALUES ('Lingcod', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-10/640x427-Lingcod-NOAAFisheries.png?itok=l8N-xhHF', 'https://www.fisheries.noaa.gov/species/lingcod', 'Ophiodon elongatus');
INSERT INTO public.fish VALUES ('North Pacific Swordfish', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-09/640x427-Swordfish-NOAAFisheries.png?itok=CXHjejmF', 'https://www.fisheries.noaa.gov/species/north-pacific-swordfish', 'Xiphias gladius');
INSERT INTO public.fish VALUES ('Northern Anchovy', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-10/640x427-Anchovy-Northern-NOAAFisheries.png?itok=fDz8ufgN', 'https://www.fisheries.noaa.gov/species/northern-anchovy', 'Engraulis mordax');
INSERT INTO public.fish VALUES ('Opah', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-08/640x427-Opah-Moonfish-NOAAFisheries.png?itok=3rRAvRVH', 'https://www.fisheries.noaa.gov/species/opah', 'Lampris guttatus, Lampris spp.');
INSERT INTO public.fish VALUES ('Pacific Albacore Tuna', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-09/640x427-Tuna-Albacore-NOAAFisheries.png?itok=3pIybUTf', 'https://www.fisheries.noaa.gov/species/pacific-albacore-tuna', 'Thunnus alalunga');
INSERT INTO public.fish VALUES ('Pacific Bigeye Tuna', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-07/640x427-Tuna-Bigeye-NOAAFisheries.png?itok=vKgMmIBb', 'https://www.fisheries.noaa.gov/species/pacific-bigeye-tuna', 'Thunnus obesus');
INSERT INTO public.fish VALUES ('Pacific Bluefin Tuna', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-09/640x427-Tuna-Bluefin-NOAAFisheries.png?itok=5xIuIw1T', 'https://www.fisheries.noaa.gov/species/pacific-bluefin-tuna', 'Thunnus orientalis');
INSERT INTO public.fish VALUES ('Pacific Cod', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-10/640x427-Cod-Pacific-NOAAFisheries.png?itok=E6LQhFpp', 'https://www.fisheries.noaa.gov/species/pacific-cod', 'Gadus macrocephalus');
INSERT INTO public.fish VALUES ('Pacific Common Thresher Shark', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-08/640x427-Shark-Common-Thresher-NOAAFisheries.png?itok=C0PrxgOg', 'https://www.fisheries.noaa.gov/species/pacific-common-thresher-shark', 'Alopias vulpinus');
INSERT INTO public.fish VALUES ('Pacific Halibut', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-10/640x427-Halibut-Pacific-NOAAFisheries.png?itok=U9ngrjt4', 'https://www.fisheries.noaa.gov/species/pacific-halibut', 'Hippoglossus stenolepis');
INSERT INTO public.fish VALUES ('Pacific Mackerel', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-09/640x427-Mackerel-Pacific-NOAAFisheries.png?itok=W0ZVw2LM', 'https://www.fisheries.noaa.gov/species/pacific-mackerel', 'Scomber japonicus');
INSERT INTO public.fish VALUES ('Pacific Mahimahi', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-08/640x427-Mahimahi-NOAAFisheries.png?itok=PKR_aDtx', 'https://www.fisheries.noaa.gov/species/pacific-mahimahi', 'Coryphaena hippurus');
INSERT INTO public.fish VALUES ('Pacific Ocean Perch', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-08/640x427-Pacific-Ocean-Perch-NOAAFisheries.png?itok=QsHAlDay', 'https://www.fisheries.noaa.gov/species/pacific-ocean-perch', 'Sebastes alutus');
INSERT INTO public.fish VALUES ('Pacific Sardine', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-09/640x427-Sardine-Pacific-NOAAFisheries.png?itok=88EjDYWA', 'https://www.fisheries.noaa.gov/species/pacific-sardine', 'Sardinops sagax caerulea');
INSERT INTO public.fish VALUES ('Pacific Shortfin Mako Shark', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-08/640x427-Shortfin-Mako-Shark-NOAAFisheries.png?itok=hVhyo2E8', 'https://www.fisheries.noaa.gov/species/pacific-shortfin-mako-shark', 'Isurus oxyrinchus');
INSERT INTO public.fish VALUES ('Pacific Skipjack Tuna', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-08/640x427-Tuna-Skipjack-NOAAFisheries.png?itok=ew3UUdkJ', 'https://www.fisheries.noaa.gov/species/pacific-skipjack-tuna', 'Katsuwonus pelamis');
INSERT INTO public.fish VALUES ('Pacific Spiny Dogfish', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-08/640x427-Shark-SpinyDogfish-NOAAFisheries.png?itok=SF4f354U', 'https://www.fisheries.noaa.gov/species/pacific-spiny-dogfish', 'Squalus suckleyi');
INSERT INTO public.fish VALUES ('Pacific Wahoo', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-08/640x427-Wahoo-NOAAFisheries.png?itok=5Ncj5N9M', 'https://www.fisheries.noaa.gov/species/pacific-wahoo', 'Acanthocybium solanderi');
INSERT INTO public.fish VALUES ('Pacific Whiting', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-09/640x427-Pacific-Whiting-Hake-NOAAFisheries.png?itok=UI2CBipp', 'https://www.fisheries.noaa.gov/species/pacific-whiting', 'Mercluccius productus');
INSERT INTO public.fish VALUES ('Pacific Yellowfin Tuna', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-08/640x427-Tuna-Yellowfin-NOAAFisheries.png?itok=4OETK5Jf', 'https://www.fisheries.noaa.gov/species/pacific-yellowfin-tuna', 'Thunnus albacares');
INSERT INTO public.fish VALUES ('Petrale Sole', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-09/640x427-Sole-Petrale-NOAAFisheries_0.png?itok=JtvadPJ2', 'https://www.fisheries.noaa.gov/species/petrale-sole', 'Eopsetta jordani');
INSERT INTO public.fish VALUES ('Pink Salmon', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-10/640x427-Salmon-Pink-NOAAFisheries.png?itok=9zpNO8og', 'https://www.fisheries.noaa.gov/species/pink-salmon', 'Oncorhynchus gorbuscha');
INSERT INTO public.fish VALUES ('Rex Sole', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/dam-migration/rex_sole.png?itok=HLHg3Obs', 'https://www.fisheries.noaa.gov/species/rex-sole', 'Glyptocephalus zachirus');
INSERT INTO public.fish VALUES ('Rock Sole', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-10/640x427-Sole-Rock-NOAAFisheries.png?itok=pKuRf9GQ', 'https://www.fisheries.noaa.gov/species/rock-sole', 'Lepidopsetta billineta (southern rock sole) and Lepidopsetta polyxystra (northern rock sole)');
INSERT INTO public.fish VALUES ('Sablefish', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/dam-migration/640x427-sablefish.png?itok=FDAC2h-z', 'https://www.fisheries.noaa.gov/species/sablefish', 'Anoplopoma fimbria');
INSERT INTO public.fish VALUES ('Shortspine Thornyhead', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-10/640x427-Shortspine-Thornyhead-NOAAFisheries.png?itok=fg5ygeCq', 'https://www.fisheries.noaa.gov/species/shortspine-thornyhead', 'Sebastolobus alascanus');
INSERT INTO public.fish VALUES ('Sockeye Salmon', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-09/640x427-Salmon-Sockeye-NOAAFisheries.png?itok=4cgPkm8O', 'https://www.fisheries.noaa.gov/species/sockeye-salmon', 'Oncorhynchus nerka');
INSERT INTO public.fish VALUES ('Striped Marlin', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/dam-migration/640x427-striped-marlin.png?itok=vd1qeery', 'https://www.fisheries.noaa.gov/species/striped-marlin', 'Kajikia audax');
INSERT INTO public.fish VALUES ('Widow Rockfish', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/2022-09/640x427-Widow-Rockfish-NOAAFisheries.png?itok=h4cBZyAP', 'https://www.fisheries.noaa.gov/species/widow-rockfish', 'Sebastes entomelas');
INSERT INTO public.fish VALUES ('Yellowtail Rockfish', 'https://www.fisheries.noaa.gov/s3/styles/media_375_x_250/s3/dam-migration/640x427-rockfish_yellowtail_nb_w.jpg?itok=ejpmIU4V', 'https://www.fisheries.noaa.gov/species/yellowtail-rockfish', 'Sebastes flavidus');


-- psql -d <enter your elephant DB url here!> -f fish_postgres_create.sql
-- (bryces)psql -d postgres://zndfsdcu:QJza_1T-n0KVS_un59eO-9LTzDy4Ll_a@drona.db.elephantsql.com/zndfsdcu -f fish_postgres_create.sql