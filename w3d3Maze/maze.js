$(function () {
    "use strict";
    $('#start').click(function () {
        const $walls = $("#maze .boundary");
        const $status = $('#status');
        const $maze = $('#maze');
        $walls.removeClass('youlose'); // reset walls
        $status.text("Maze has begun! Find your way through");

        $walls.mouseenter(function () {
            $walls.addClass('youlose');
        });

        $maze.mouseleave(function () {
            // if you leave the maze div, you lose!
            $walls.addClass('youlose');
        });

        $('#end').mouseenter(function () {
            if ($walls.hasClass('youlose')) {
                $status.text("You lose :[");
            } else {
                $status.text("You win :]");
            }
            $walls.off('mouseenter');
            $maze.off('mouseleave');
        });
    });
});