<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('post_author')->default(0);
            $table->timestamp('post_date')->default('0000-00-00 00:00:00');
            $table->longText('post_content');
            $table->text('post_title');
            $table->text('post_status',20);
            $table->text('comment_status',20);
            $table->text('post_slug');
            $table->timestamp('post_modified')->default('0000-00-00 00:00:00');
            $table->text('post_template');
            $table->integer('menu_order');
            $table->text('post_type',20);
            $table->text('post_meme_type',100);
            $table->integer('comment_counts')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('posts');
    }
}
