defmodule Src.PageControllerTest do
  use Src.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "Hello React!"
  end

  test "html element for readt", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "<div id=\"hello-react\"></div>"
  end
end
