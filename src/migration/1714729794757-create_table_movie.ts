import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableMovie1714729794757 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE public.movie (
                id integer NOT NULL,
                name character varying NOT NULL,
                description character varying NOT NULL,
                primary key (id)
            );
            CREATE SEQUENCE public.movie_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
                
            ALTER SEQUENCE public.movie_id_seq OWNED BY public.movie.id;
            ALTER TABLE ONLY public.movie ALTER COLUMN id SET DEFAULT nextval('public.movie_id_seq'::regclass);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            drop table public.movie;
        `);
    }

}
