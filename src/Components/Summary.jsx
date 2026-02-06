export default function Summary({ total, watched, unwatched, warning }) {
    return (
        <div className="summaryWrap">
            <div className="summary">
                <SummaryCard label="Total Movies" value={total} />
                <SummaryCard label="Watched" value={watched} />
                <SummaryCard label="Unwatched" value={unwatched} />
            </div>

            {warning && (
                <div className="warning">
                     You watched everything!
                </div>
            )}

        </div>
    );
}

function SummaryCard({ label, value }) {
    return (
        <div className="summaryCard">
            <div className="summaryLabel">{label}</div>
            <div className="summaryValue">{value}</div>
        </div>
    );
}
