defmodule Src.TrainingPlanController do
  use Src.Web, :controller

  def create(conn, params) do
    plans = %{plan: :ok, params: params}
    json conn, plans
  end
end
